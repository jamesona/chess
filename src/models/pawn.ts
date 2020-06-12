import { IOrderedPair } from "./cartesian-grid";
import { ChessPiece, PieceColor, PieceName } from "./piece"

export class Pawn extends ChessPiece {
	constructor(color: PieceColor) {
		super(color, PieceName.Pawn, isValidMove)
	}
}

function isValidMove(from: IOrderedPair, to: IOrderedPair): boolean {
	return false
}
