import {expectType} from 'tsd';
import age from './index.js';

expectType<number>(age());
expectType<number>(age({type: 'child'}));
expectType<number>(age({type: 'teen'}));
expectType<number>(age({type: 'adult'}));
expectType<number>(age({type: 'senior'}));
expectType<number>(age({type: 'all'}));
