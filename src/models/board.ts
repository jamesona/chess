import { CartesianGrid } from "./cartesian-grid";
import { ChessPiece, PieceColor } from "./piece";
import * as pieces from './pieces'

export class ChessBoard extends CartesianGrid<ChessPiece|null> {
	constructor() {
		super(8)

		populatePieces(this.grid, PieceColor.black)
		populatePieces(this.grid, PieceColor.white)
	}
}

function populatePieces(grid: any[][], color: PieceColor) {
	let front: any[]
	let back: any[]

	if (color === PieceColor.black) {
		front = grid[1]
		back = grid[0]
	} else {
		front = grid[6]
		back = grid[7]
	}

	front.forEach((x, i) => front[i] = new pieces.Pawn(color))
	back[0] = new pieces.Rook(color)
	back[1] = new pieces.Knight(color)
	back[2] = new pieces.Bishop(color)
	back[3] = new pieces.Queen(color)
	back[4] = new pieces.King(color)
	back[5] = new pieces.Bishop(color)
	back[6] = new pieces.Knight(color)
	back[7] = new pieces.Rook(color)

}
