// we import the types to re-export them inside types.
import {
    enumeration,
    model,
    compose,
    custom,
    reference,
    safeReference,
    union,
    optional,
    literal,
    maybe,
    maybeNull,
    refinement,
    string,
    boolean,
    number,
    integer,
    DatePrimitive,
    map,
    array,
    frozen,
    identifier,
    identifierNumber,
    late,
    lazy,
    undefinedType,
    nullType,
    snapshotProcessor
} from "../internal"

export const types = {
    enumeration,
    model,
    compose,
    custom,
    reference,
    safeReference,
    union,
    optional,
    literal,
    maybe,
    maybeNull,
    refinement,
    string,
    boolean,
    number,
    integer,
    Date: DatePrimitive,
    map,
    array,
    frozen,
    identifier,
    identifierNumber,
    late,
    lazy,
    undefined: undefinedType,
    null: nullType,
    snapshotProcessor
}
