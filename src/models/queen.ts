import { IOrderedPair } from './cartesian-grid';
import { ChessPiece, PieceColor, PieceName } from './piece'

export class Queen extends ChessPiece {
	constructor(color: PieceColor) {
		super(color, PieceName.Queen, isValidMove)
	}
}

function isValidMove(from: IOrderedPair, to: IOrderedPair): boolean {
	return false
}
