## Event loop:

    1. node js will decide either it can handle or OS needs handle
    2. If it's like simple operations like ->synchornous math,loops,manipulations,JSON parsing
    3. Node delegates to libuv, which calls OS-level APIs (non-blocking I/O).

##

1️⃣ Node.js is Single-Threaded (but not really fully 🤔)

The JavaScript execution (the part where your code runs) happens on a single thread (one call stack, one event loop).

But under the hood, Node.js uses libuv, which itself uses a thread pool (default size = 4) for I/O operations like file system, DNS, crypto, etc.
👉 This means non-blocking I/O is handled by background threads, not blocking your main event loop.

So when we say Node is single-threaded, we really mean:

JavaScript execution = single thread

I/O operations = offloaded to libuv thread pool

1️⃣ Node.js core fact

Your JavaScript runs in one single thread → one event loop, one call stack.

That’s why we say “Node.js is single-threaded”.

2️⃣ What Cluster does

Cluster does not make Node magically multi-threaded like Java/C++ where threads share the same memory.

Instead:

It spawns multiple independent Node.js processes.

Each process has its own event loop, its own V8 engine, its own memory heap.

The OS (or Node’s master process) distributes incoming connections between them.

👉 This is multi-processing, not multi-threading.

3️⃣ Analogy 🍕

Imagine a restaurant kitchen:

🥄 Single Node.js process

You have 1 chef (event loop) cooking all dishes.

The chef is fast at delegating (I/O offloaded to assistants = libuv thread pool).

But if you ask for one huge roast (CPU heavy), the chef is stuck.

🍽 Cluster (multi-processing)

Instead of 1 chef, you hire 8 chefs, each in their own mini-kitchen.

They don’t share the same cutting board or pan (each has its own memory & tools).

The head waiter (master process) decides which chef will cook each order.

Now 8 dishes can cook at the same time (using 8 CPU cores).

🔧 True multi-threading (not what cluster is)

Imagine 1 big kitchen with 8 chefs all working on the same dish at once and sharing the same ingredients on the same table (shared memory).

That’s what real multi-threading looks like.

Node.js doesn’t do this with clusters — but worker_threads module allows this kind of behavior.

4️⃣ So why is Cluster multi-processing?

Because every worker is a separate OS process, not a thread.

They don’t share memory directly.

They communicate through IPC (inter-process communication), which is slower than direct memory sharing.
