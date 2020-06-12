import { IOrderedPair } from './cartesian-grid';
import { ChessPiece, PieceColor, PieceName } from './piece'

export class Rook extends ChessPiece {
	constructor(color: PieceColor) {
		super(color, PieceName.Rook, isValidMove)
	}
}

function isValidMove(from: IOrderedPair, to: IOrderedPair): boolean {
	return false
}
