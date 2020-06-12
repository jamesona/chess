import { IOrderedPair } from './cartesian-grid';
import { ChessPiece, PieceColor, PieceName } from './piece'

export class Bishop extends ChessPiece {
	constructor(color: PieceColor) {
		super(color, PieceName.Bishop, isValidMove)
	}
}

function isValidMove(from: IOrderedPair, to: IOrderedPair): boolean {
	return false
}
