import { IOrderedPair } from "./cartesian-grid";

export function getUnicode(code: PieceCode, color: PieceColor): number {
	return 2654 + code + (color * 6)
}

export function getHtml(code: PieceCode, color: PieceColor): number {
	return 9812 + code + (color * 6)
}

export enum PieceCode { 'K', 'Q', 'R', 'B', 'N', 'P' }
export enum PieceName { 'King', 'Queen', 'Rook', 'Bishop', 'Knight', 'Pawn' }
export enum PieceColor { 'black', 'white' }

export abstract class ChessPiece {
	public readonly color: keyof typeof PieceColor
	public readonly type: keyof typeof PieceName
	public readonly code: keyof typeof PieceCode

	constructor(
		color: PieceColor,
		type: PieceName,
		public readonly canMoveTo: MoveValidator
	) {
		this.color = PieceColor[color] as keyof typeof PieceColor
		this.type = PieceName[type] as keyof typeof PieceName
		this.code = PieceCode[type] as keyof typeof PieceCode
	}

	get unicode(): number {
		return getUnicode(PieceCode[this.code], PieceColor[this.color])
	}

	get htmlEntity(): number {
		return getHtml(PieceCode[this.code], PieceColor[this.color])
	}
}

export type MoveValidator = (from: IOrderedPair, to: IOrderedPair) => boolean
