## Event loop:

    1. node js will decide either it can handle or OS needs handle
    2. If it's like simple operations like ->synchornous math,loops,manipulations,JSON parsing
    3. Node delegates to libuv, which calls OS-level APIs (non-blocking I/O).
