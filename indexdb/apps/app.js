window.indexedDB = window.indexedDB || window.mozIndexedDB;

if (!window.indexedDB) {
  console.log("indexDB is not supported");
}
let request = window.indexedDB.open("QuizQuestDatabase", 1);
let db, tx, store, index;

request.onupgradeneeded = function (e) {
  let db = request.result;
  let store = db.createObjectStore("QuestionStore", { keyPath: "qID" });
  let index = store.createIndex("questionText", "questionText", {
    unique: false,
  });
};

request.onerror = function (e) {
  console.log("there was an error: " + e.target.errorCode);
};

request.onsuccess = function (e) {
  db = request.result;
  tx = db.transaction("QuestionStore", "readwrite");
  store = tx.objectStore("QuestionStore");
  index = store.index("questionText");

  db.onerror = function (e) {
    console.log("ERROR" + e.target.errorCode);
  };

  store.put({
    qID: 1,
    questionText: "The sky is blue.",
    correctAnswwer: true,
    studentAnswer: true,
    result: true,
  });
  store.put({
    qID: 2,
    questionText: "The grass is green.",
    correctAnswwer: true,
    studentAnswer: true,
    result: true,
  });

  tx.oncomplete = function () {
    db.close();
  };
};
