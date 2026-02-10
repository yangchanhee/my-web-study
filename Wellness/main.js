// 1. 섹션 전환 (기존 로직 유지 및 확장)
function showSection(id) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    
    document.querySelectorAll('.side-nav a').forEach(a => a.classList.remove('active'));
    const navBtn = document.getElementById(`btn-${id}`);
    if(navBtn) navBtn.classList.add('active');

    document.querySelector('.content-area').scrollTo(0, 0);
}

// 2. 로그인 처리
function handleLogin() {
    const email = document.getElementById('userEmail').value;
    if(email) {
        document.getElementById('p-email').innerText = email;
        alert("성공적으로 로그인되었습니다.");
        closeModal('loginModal');
    } else {
        alert("이메일을 입력하세요.");
    }
}

// 3. 솔루션 데이터 (유튜브 숏폼 링크 포함)
const solutions = {
    'vivid': {
        type: "Vivid Mode",
        title: "신체 에너지 긴급 수혈",
        coaching: "현재 신체 활성도가 매우 낮습니다. 고채도의 시각 자극과 경쾌한 리듬의 숏폼이 필요합니다. 찬물 세안 후 아래 영상을 시청하세요.",
        color: "red",
        url: "https://youtube.com/shorts/3Oa6mI0" // 기분 전환 숏폼 URL 예시
    },
    'blue': {
        type: "Deep Blue Mode",
        title: "스트레스 디톡스 명상",
        coaching: "정신적 스트레스 수치가 한계치입니다. 부교감 신경 활성화를 위해 낮은 채도의 시네마틱 영상과 6분 명상을 제안합니다.",
        color: "blue",
        url: "https://youtube.com/shorts/5Xb8mP1"
    },
    'green': {
        type: "Stable Green",
        title: "안정적인 마무리를 위한 리포트",
        coaching: "오늘 하루 수고하셨습니다. 현재의 안정적인 리듬을 유지하며 내일의 최적 컨디션을 위한 가벼운 스트레칭 영상을 시청하세요.",
        color: "green",
        url: "https://youtube.com/shorts/8Yn2rK9"
    }
};

function getSolution(key) {
    const data = solutions[key];
    document.getElementById('solutionBox').classList.remove('hidden');
    document.getElementById('resType').innerText = data.type;
    document.getElementById('resTitle').innerText = data.title;
    document.getElementById('resCoaching').innerText = data.coaching;
    document.getElementById('youtubeLink').href = data.url;

    // My Data 연동 (컨디션 색상 변경)
    const colorInd = document.getElementById('statusColor');
    colorInd.className = 'color-indicator ' + data.color;
    document.getElementById('statusTxt').innerText = data.type;
}

// 4. 모달 제어
function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }