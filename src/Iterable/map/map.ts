import autocurry from "Function/autocurry/autocurry"
import seq   from "Iterable/seq/seq"
import xmap  from "Transducer/xmap/xmap"
import Mapper from "Type/Mapper/Mapper"



const map = <TValueA, TValueB>(mapper: Mapper<TValueA, TValueB>, xs: Iterable<TValueA>): Iterable<TValueB> =>
        seq(xmap(mapper), xs)



export default autocurry(map) as {
    <TValueA, TValueB>(mapper: Mapper<TValueA, TValueB>, xs: any): any
    <TValueA, TValueB>(mapper: Mapper<TValueA, TValueB>): (xs: any) => any

    //<T, R>(transformer: Mapper<T, R>, xs: T[]): R[]
    //<T, R>(transformer: Mapper<T, R>): (xs: T[]) => R[]
    //
    //<T, R>(transformer: Mapper<T, R>, xs: string): string
    //<T, R>(transformer: Mapper<T, R>): (xs: string) => string
    //
    //<T, R>(transformer: Mapper<T, R>, xs: Set<T>): Set<R>
    //<T, R>(transformer: Mapper<T, R>): (xs: Set<T>) => Set<R>
    //
    //<TK, TV, RK, RV>(transformer: Mapper<[ TK, TV ], [ RK, RV ]>, xs: Map<TK, TV>): Map<RK, RV>
    //<TK, TV, RK, RV>(transformer: Mapper<[ TK, TV ], [ RK, RV ]>): (xs: Map<TK, TV>) => Map<RK, RV>
    //
    //<T, R>(transformer: Mapper<T, R>, xs: any): any
}
