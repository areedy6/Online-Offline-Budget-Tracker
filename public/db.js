
let db = request.result;

const request = window.indexedDB.open("budget", 1);
request.onupgradeneeded = function(event) {
  
  const budgetStore = db.createObjectStore("pending");

};

request.onsuccess = function(event) {
  const db = target.result; 

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function(event) {
 
};

function saveRecord(record) {

  const transaction = db.transaction(["pending"], "readwrite");
  const pendingStore = transaction.objectStore("pending");

}

function checkDatabase() {

  getAll.onsuccess = function() {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(() => {
          // if successful, open a transaction on your pending db
          // access your pending object store
          // clear all items in your store
      });
    }
  };
}

window.addEventListener("online", checkDatabase);