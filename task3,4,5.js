
  function toggleTheme() {
    document.body.classList.toggle("dark-theme");
  }

  function sendDream() {
    const input = document.getElementById("dreamInput");
    const box = document.getElementById("dreamChatBox");
    const message = input.value.trim();
    if (!message) return;
    const userMsg = `<div class="chat-message user">You: ${message}</div>`;
    const botReply = `<div class="chat-message bot">Bot: "${message}" sounds fascinating! Let me interpret it... 🧠✨</div>`;
    box.innerHTML += userMsg + botReply;
    input.value = '';
    box.scrollTop = box.scrollHeight;
  }

  function login(e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    alert(`Welcome, ${user}!`);
    const modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
    modal.hide();
  }

  function searchBooks() {
    const query = document.getElementById("bookSearch").value;
    const inner = document.getElementById("bookCarouselInner");
    const wrapper = document.getElementById("bookCarouselWrapper");
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(res => res.json())
      .then(data => {
        inner.innerHTML = '';
        data.items.slice(0, 5).forEach((book, i) => {
          const info = book.volumeInfo;
          const active = i === 0 ? 'active' : '';
          inner.innerHTML += `
            <div class="carousel-item ${active}">
              <div class="card text-center p-3">
                <img src="${info.imageLinks?.thumbnail || ''}" class="card-img-top mx-auto" />
                <div class="card-body">
                  <h5 class="card-title">${info.title}</h5>
                  <p class="card-text">${info.description?.slice(0, 100) || 'No description available.'}</p>
                </div>
              </div>
            </div>`;
        });
        wrapper.style.display = 'block';
      });
  }

  const bgColors = ["#f8f9fa", "#e0f7fa", "#fce4ec", "#f3e5f5", "#e8f5e9", "#fff3e0", "#ede7f6"];
let bgIndex = 0;

function changeBgColor() {
  bgIndex = (bgIndex + 1) % bgColors.length;
  document.body.style.backgroundColor = bgColors[bgIndex];
}


