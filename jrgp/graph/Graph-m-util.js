import M from '../matrix/Matrix'
//
//use @ in wepackconfig
//
export default
//
// qm
//
class Graph {
    isDirected(g) {
	for (let r = 0; r < g.length; r++)
            for (let c = r; c < g.length; c++)
		if (g[r][c] != g[c][r])
		    return true
	return false
    }

    isDirectedAlt(g) {
	return !g.isSymmetric()
    }
}
