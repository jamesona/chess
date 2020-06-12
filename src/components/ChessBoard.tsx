import * as React from 'react'
import './ChessBoard.css'

import { ChessBoard as state } from '../models/board'
import { ChessPiece } from './ChessPiece';

export class ChessBoard extends React.Component {
	public state: any

	constructor(public props: any) {
		super(props)

		this.state = new state()
	}

	public render() {
		return renderBoard(this.state.grid)
	}
}

function renderTile(data: any, row: number, column: number): JSX.Element {
	return <div key={'row-'+row+':col-'+column}
		className='tile'
		data-color={determineTileColor(row, column)}
	>{data ? <ChessPiece data={data}/> : null }</div>
}

function renderRow(data: any[], row: number): JSX.Element {
	return (
		<div key={'row-'+row} className='row'>{
			data.map((tile, col) => {
				return renderTile(tile, row, col)
			})
		}</div>
	)
}

function renderBoard(data: any[][]): JSX.Element {
	return (
		<div className='ChessBoard'>{
			data.map((row, i) => renderRow(row, i))
		}</div>
	)
}

function isEven(n: number): boolean {
	return n % 2 === 0
}

function isOdd(n: number): boolean {
	return !isEven(n)
}

function determineTileColor(row: number, column: number): 'black'|'white' {
	if (
		isEven(row) && isEven(column)
	|| isOdd(row) && isOdd(column)
	) {
		return 'white'
	}
	return 'black'
}
