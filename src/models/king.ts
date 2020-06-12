import { IOrderedPair } from './cartesian-grid';
import { ChessPiece, PieceColor, PieceName } from './piece'

export class King extends ChessPiece {
	constructor(color: PieceColor) {
		super(color, PieceName.King, isValidMove)
	}
}

function isValidMove(from: IOrderedPair, to: IOrderedPair): boolean {
	return false
}
