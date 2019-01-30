declare module "Iterable/map/map" {
    type Mapper = <T>(x: any, i: number, xs: Iterable<T>) => Iterable<T>

    function map<T>(mapper: Mapper, xs: Iterable<T>): Iterable<T>
    function map<T>(mapper: Mapper): (xs: Iterable<T>) => Iterable<T>



    export = map
}
