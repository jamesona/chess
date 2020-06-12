import * as React from 'react'
import './ChessPiece.css'

import { ChessPiece as model, PieceColor } from '../models/piece'

export class ChessPiece extends React.Component {
	public data: model

	constructor(public props: any) {
		super(props)
		this.data = props.data
	}

	public get color() {
		return this.data.color
	}

	public get type() {
		return this.data.type
	}

	public get code() {
		// we're going to transform black pieces into white
		// and only color them black using css
		// it looks better that way
		return this.data.htmlEntity + (PieceColor[this.color] ? 0 : 6)
	}

	public render() {
		return (
			<span className="ChessPiece"
				data-color={this.color}
				title={this.color+' '+this.type}
			>
				{String.fromCharCode(this.code)}
			</span>
		)
	}
}
