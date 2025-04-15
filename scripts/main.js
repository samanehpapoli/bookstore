/**
 * mikhahim ketab haro dar div books bezarim
 * hamiche ghab az har for yekbar safhe ro khali mikonim
 */
function init() {
  updateFromLocalStorage();
  renderBooks();
}

function updateFromLocalStorage() {
  books = getFromLocalStorage("books");
}

function renderBooks() {
  let booksElement = document.getElementById("books");
  booksElement.innerHTML = "";
  for (i = 0; i < books.length; i++) {
    booksElement.innerHTML += getBookTemplatre(i);
  }
}

// in shart chek mikonad red ast ya na barae in kar dobare mirim to moteghayer books[index]
// ghesmate .liked shart barasi mikonim true ast agar are like-red agar na like khali
function getLikeStatus(index) {
  if (books[index].liked === true) {
    return "like-red.png";
  } else {
    return "like.png";
  }
}

// hala mmikham vaghti rosh zadim ghermez shon yeki be add ezafe beshe
// age ghermezesh raft yeki kam beshe
// avalin kar ye onclik mizarim dar khat funktion like onclick="likeBook()"
// mohem mohem khili mohem onclick dorost benevis
// mirim to motrghayae books yeki az addad kam mikonim
// baraye in ke taghir dade shodebemenad  bayad dobare render shavad
function likeBook(index) {
  if (books[index].liked === true) {
    books[index].likes--;
    books[index].liked = false;
  } else {
    books[index].likes++;
    books[index].liked = true;
  }
  saveToLocalStorage("books", books);
  renderBooks();
}

// template ma dar halghe ast ama barae avardan commet ha
// ma bayad ye halghe digar dashte bashim ta comment ha ra biyavarad
// dar ghesmat table yek funktion  ${loadComments()} ta in tabe tr hara beyavarad
//  ${loadComments(index)} in index index ketabas ke alan toshim.
//  ma mikhym be ezae har ketab be ezae komment haie ke dare tr copy konam
// aval khali mikonim badesh be andaze tol halghe ke manzor tr hast++
//  bad ba += tr badi ra michasbonimbahesh
// tr halghe ke tamom shod commenr return mikone
// dar inja inner html namikhaym chon darda dar for balai miyayad
//  ma faghat meghdar mikhaym
//dar inja <td>[${books[index].comments[i].name}]</td>chom
// bad az comment chon be arry miresim bayad []bezarim
//if vared shode inja be in dalil ast ke aya commente hast ya na
// agar nist benevise : Es gipt keinen Komentare
function loadComments(index) {
  let comments = "";
  if (books[index].comments.length > 0) {
    for (let i = 0; i < books[index].comments.length; i++) {
      comments += getCommentTemplate(index, i);
    }
  } else {
    comments = getEmptyCommentTemplate();
  }

  return comments;
}

// dar ghesmst input id id="addCommentInput" ezafe mikonim ama ma bayad esmesh ro tori bezarim
//  ke heme input hae ketaba ro dar bar begire na yeki bekhater hamin esmesho
//  (vaghti dar incpect negah konim tamame id hae input yek id dar pas payad ) =>("addCommentInput" + index) index ra ezafe mikonim
// push mikonim deghat kon object ezafe kon ama push akhr ezafe mikone ma bayad unshift bezarim
function addComment(index) {
  let addCommentInputValue = document.getElementById(
    "addCommentInput" + index
  ).value;
  books[index].comments.unshift({
    name: "Samaneh",
    comment: addCommentInputValue,
  });
  saveToLocalStorage("books", books);
  renderBooks();
}

// ba har bar refresh tamame info jadid mire bad lacalstorage dashte bashim mirim az notiz block miyarim
// inha bayad jahai add konimke array taghir mikonad yani render mikonim
//  dar onja lokal storage appdate mishe avali ja like ha ast taghr ijad mishavad ba har bar like
// saveToLocalStorage (key,value) jaie ke tabe likeBook Ghable render
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// brae commenta  bayad ek bar bad i function init get konim
//   faghat dar notizblock migoftim aghe chisi nabod arrye khali bar gardon   return [];
// ama inja hamiche ye seri kommentha ast hamona ro bargardon
function getFromLocalStorage(key) {
  if (JSON.parse(localStorage.getItem(key)) === null) {
    return books;
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
}
