/**  <div class="like"> bayad monhaser be fard shavad barae har ketab bekhtrre hamin behesh id midim 
 * span in ghesmat ra bar midarim va dar yek template digar ghara midahim
*/

function getBookTemplatre(index) {
  return `<div class="book">
              <h2>${books[index].name}</h2> 
              <div class="book_image">
                  <img src="./assets/img/${books[index].image}" alt="${books[index].name}">
              </div>
              <div class="book_info">
                  <div class="top"> 
                      <div class="price">${books[index].price}</div>
                      <div class="like" id=like-wrapper${index}> </div>
                  </div>
                  <div class="bottom">
                      <table>
                          <tr>
                              <td>Author</td>
                              <td>${books[index].author}</td>
                          </tr>
                          <tr>
                              <td>Erscheinungsjahr</td>
                              <td>${books[index].publishedYear}</td>
                          </tr>
                          <tr>
                              <td>Genre</td>
                              <td>${books[index].genre}</td>
                          </tr>
                      </table>
                  </div>
              </div>
              <div class="comments">
                <h2>Komentare:</h2>
                <div class="table-container">
                    <table id="comment-wrapper${index}">
                    </table>
                </div>
              </div>
              <div class="add_comment">
                  <input type="text" placeholder="Schreib dein komentare..." id="addCommentInput${index}">
                  <img src="./assets/icon/send.png" onclick="addComment(${index})" alt="Send">
              </div>
            </div>`;
}

// template mikonim ama barae pass kare index tavajoh kon do ta parametr mikham
// dar balae paramet index va i= getCommentTemplate(index, i)
// dar pain bookIndex va commentIndex
function getCommentTemplate(bookIndex, commentIndex) {
  return `<tr>
            <td>[${books[bookIndex].comments[commentIndex].name}]</td>
            <td> ${books[bookIndex].comments[commentIndex].comment}</td>
          </tr>`;
}

// colspan="2" yani in ke in khune (cell) do ta soton ro be sorat yekja migire
function getEmptyCommentTemplate() {
    return `<tr><td colspan="2"> Es gibt keinen Komentar</td></tr>`;
}
// in templete likast
function getLikeTemplate(index) {
return `<span>${  books[index].likes }</span>
        <img src="./assets/icon/${getLikeStatus(index)}" onclick="likeBook(${index})" alt="like"></img>`;    
}