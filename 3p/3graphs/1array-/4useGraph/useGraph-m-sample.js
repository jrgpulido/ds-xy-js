import GraphSample from '../../../../jrgp/graph/Graph-m-sample.js'
import Graph from '../../../../jrgp/graph/Graph-m.js'

//
// ok - asMatrix
//

(function () {
    console.log('... ::: useGraphSample-m begins ::: ...\n')

    let s = new GraphSample()
    let l = new Graph(s.getLoopy())
    let u = new Graph(s.getUndirected())
    let d = new Graph(s.getDirected())
    let p = new Graph(s.getPlanar())
    let m = new Graph(s.getCompleteDummy())
    let c = new Graph(s.getComplete(7))
//    let x = new Graph()
//    let x = new Graph([])
//    let x = new Graph([[]])

    l.print('A loopy graph')
    u.print('A simple undirected graph')
    d.print('A simple directed graph')
//    p.print('A planar graph')
//    m.print('A complete dummy graph')
    c.print('A complete graph')//    x.print('x')

    console.log('\n... ::: useGraphSample-m ends ::: ...')
})()
