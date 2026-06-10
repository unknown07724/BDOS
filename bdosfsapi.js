async function read(path) {
    const db = await openFS();

    return new Promise((resolve) => {
        const tx = db.transaction(STORE, "readonly");
        const store = tx.objectStore(STORE);

        const req = store.get(path);

        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
    });
}

async function write(path, content) {
    const db = await openFS();

    return new Promise((resolve) => {
        const tx = db.transaction(STORE, "readwrite");
        const store = tx.objectStore(STORE);

        const req = store.put({
            path,
            content,
            updatedAt: Date.now()
        });

        req.onsuccess = () => resolve(true);
        req.onerror = () => resolve(false);
    });
}
async function deleteFile(path) {
    const db = await openFS();

    return new Promise((resolve) => {
        const tx = db.transaction(STORE, "readwrite");
        const store = tx.objectStore(STORE);

        const req = store.delete(path);

        req.onsuccess = () => resolve(true);
        req.onerror = () => resolve(false);
    });
}
