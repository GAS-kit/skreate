/* tslint:disable */
/* eslint-disable */

export class GeneratedSvgPositions {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  /**
   * Retrieve the SVG.
   */
  readonly svg: string;
  /**
   * Retrieve the timings.
   */
  readonly timings: Uint32Array;
  /**
   * Retrieve the move positions.
   */
  readonly positions: string[];
}

export class ParseError {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  /**
   * Retrieve the message associated with the error.
   */
  msg: string;
  /**
   * Row of input with error.
   */
  row: number;
  /**
   * Column of input with error.
   */
  col: number;
}

/**
 * Generate output.
 */
export function generate(input: string): string;

/**
 * Generate output with positions.
 */
export function generate_with_positions(input: string): GeneratedSvgPositions;

/**
 * Perform initialization. Safe to be invoked more than once.
 */
export function initialize(): void;

/**
 * Generate canonical input, URL-encoded.
 */
export function minimize(input: string): string;

/**
 * Generate canonical input displayed vertically, URL-encoded.
 */
export function minimize_vert(input: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_generatedsvgpositions_free: (a: number, b: number) => void;
  readonly __wbg_get_parseerror_col: (a: number) => number;
  readonly __wbg_get_parseerror_row: (a: number) => number;
  readonly __wbg_parseerror_free: (a: number, b: number) => void;
  readonly __wbg_set_parseerror_col: (a: number, b: number) => void;
  readonly __wbg_set_parseerror_row: (a: number, b: number) => void;
  readonly generate: (a: number, b: number) => [number, number, number, number];
  readonly generate_with_positions: (a: number, b: number) => [number, number, number];
  readonly generatedsvgpositions_positions: (a: number) => [number, number];
  readonly generatedsvgpositions_svg: (a: number) => [number, number];
  readonly generatedsvgpositions_timings: (a: number) => [number, number];
  readonly initialize: () => void;
  readonly minimize: (a: number, b: number) => [number, number, number, number];
  readonly minimize_vert: (a: number, b: number) => [number, number, number, number];
  readonly parseerror_msg: (a: number) => [number, number];
  readonly parseerror_set_msg: (a: number, b: number, c: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __externref_drop_slice: (a: number, b: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
