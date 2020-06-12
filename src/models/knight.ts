import { IOrderedPair } from './cartesian-grid';
import { ChessPiece, PieceColor, PieceName } from './piece'

export class Knight extends ChessPiece {
	constructor(color: PieceColor) {
		super(color, PieceName.Knight, isValidMove)
	}
}

function isValidMove(from: IOrderedPair, to: IOrderedPair): boolean {
	return false
}
