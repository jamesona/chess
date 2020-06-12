type GridItem<T> = T|null
type Grid<T> = Array<Array<GridItem<T>>>

export interface IOrderedPair {
	x: number
	y: number
}

export class CartesianGrid<T> {
	protected grid: Grid<T>

	constructor(private readonly size = 10) {
		this.grid = new Array(this.size).fill(null).map(rank => {
			return new Array(this.size).fill(null)
		})
	}

	public get ranks(): Grid<T> {
		return [...this.grid.map(rank => [...rank])]
	}

	public get files(): Grid<T> {
		return transposeArray(this.ranks)
	}
}

function transposeArray<T>(arr: T[][]): T[][] {
	const trans: T[][] = new Array(arr.length).fill(null).map(_ => [])
	arr.forEach((row, i) => {
		row.forEach((column, j) => {
			trans[j][i] = column
		})
	})
	return trans
}
