// 고화질 의류 이미지 데이터 (8개)
const products = [
    { id: 1, name: "오버사이즈 울 블렌드 코트", price: "259,000", img: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=500" },
    { id: 2, name: "캐시미어 라운드넥 스웨터", price: "129,000", img: "https://images.unsplash.com/photo-1610650126224-81762537e63b?w=500" },
    { id: 3, name: "스트레이트 핏 수트 팬츠", price: "89,000", img: "https://images.unsplash.com/photo-1594932224010-3a13df2c6f32?w=500" },
    { id: 4, name: "레더 이펙트 크롭 자켓", price: "159,000", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500" },
    { id: 5, name: "옥스포드 코튼 셔츠", price: "59,000", img: "https://images.unsplash.com/photo-1598033129183-c4f50c717658?w=500" },
    { id: 6, name: "와이드 레그 데님 팬츠", price: "79,000", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500" },
    { id: 7, name: "버튼다운 가디건", price: "99,000", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500" },
    { id: 8, name: "청키 솔 가죽 부츠", price: "189,000", img: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=500" }
];

let cartCount = 0;
let user = null;

// 상품 렌더링 함수
function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map(p => `
        <div class="p-card" onclick="addToCart('${p.name}')">
            <div class="img-box">
                <img src="${p.img}" alt="${p.name}">
            </div>
            <div class="p-info">
                <p class="p-name">${p.name}</p>
                <p class="p-price">${p.price} KRW</p>
            </div>
        </div>
    `).join('');
}

// 장바구니 기능
function addToCart(name) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(`[${name}] 상품이 장바구니에 담겼습니다.`);
}

// 로그인 기능
function handleLogin() {
    const email = document.getElementById('login-email').value;
    if(email) {
        user = email;
        alert(`${email}님, 로그인이 완료되었습니다.`);
        toggleModal('login-modal');
    } else {
        alert("이메일을 입력해주세요.");
    }
}

function toggleModal(id) {
    const m = document.getElementById(id);
    m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
}

// 실행
renderProducts();