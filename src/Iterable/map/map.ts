import autocurry from "Function/autocurry/autocurry"
import seq   from "Iterable/seq/seq"
import xmap  from "Transducer/xmap/xmap"
import Mapper from "Type/Mapper/Mapper"



const map = <T, R>(transformer: Mapper<T, R>, xs: Iterable<T>): Iterable<R> =>
    seq(xmap(transformer), xs)



export default autocurry(map) as {
    <T, R>(transformer: Mapper<T, R>, xs: T[]): R[]
    <T, R>(transformer: Mapper<T, R>): (xs: T[]) => R[]

    <T, R>(transformer: Mapper<T, R>, xs: string): string
    <T, R>(transformer: Mapper<T, R>): (xs: string) => string

    <T, R>(transformer: Mapper<T, R>, xs: Set<T>): Set<R>
    <T, R>(transformer: Mapper<T, R>): (xs: Set<T>) => Set<R>

    <TK, TV, RK, RV>(transformer: Mapper<[ TK, TV ], [ RK, RV ]>, xs: Map<TK, TV>): Map<RK, RV>
    <TK, TV, RK, RV>(transformer: Mapper<[ TK, TV ], [ RK, RV ]>): (xs: Map<TK, TV>) => Map<RK, RV>

    <T, R>(transformer: Mapper<T, R>, xs: any): any
}
