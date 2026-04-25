// app.js
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('car-list-container')) {
        renderCarList(); // 在庫車一覧用
    }
    if (document.getElementById('sold-car-list-container')) {
        renderSoldCarList(); // 売約済一覧用
    }
    if (document.getElementById('car-detail-container')) {
        renderCarDetail(); // 詳細ページ用
    }
});

// ▼ 在庫車一覧を生成する関数（売約済み以外を表示）
function renderCarList() {
    const container = document.getElementById('car-list-container');
    let html = '';

    // 「売約済」ではない車だけを抽出
    const activeCars = carData.filter(car => car.status !== '売約済');

    activeCars.forEach(car => {
        let badgeHtml = '';
        // 「販売中」のバッジは非表示。「商談中」の場合のみバッジを出す
        if(car.status === '商談中') {
            badgeHtml = `<span class="status-badge badge-negotiation">${car.status}</span>`;
        }

        html += `
            <a href="detail.html?id=${car.id}" class="car-card">
                <div class="card-img-wrapper">
                    <img src="${car.mainImage}" alt="${car.name}">
                    ${badgeHtml}
                </div>
                <div class="card-info">
                    <h3 class="car-name">${car.name}</h3>
                    <p class="car-price">🐾 コミコミ <span>${car.price}</span> 万円</p>
                </div>
            </a>
        `;
    });
    
    if(activeCars.length === 0) {
        html = '<p style="text-align:center; padding:50px;">現在販売中の車両はありません。</p>';
    }
    container.innerHTML = html;
}

// ▼ 売約済み車一覧を生成する関数（売約済みのみを表示）
function renderSoldCarList() {
    const container = document.getElementById('sold-car-list-container');
    let html = '';

    // 「売約済」の車だけを抽出
    const soldCars = carData.filter(car => car.status === '売約済');

    soldCars.forEach(car => {
        html += `
            <a href="detail.html?id=${car.id}" class="car-card">
                <div class="card-img-wrapper">
                    <img src="${car.mainImage}" alt="${car.name}">
                    <!-- 売約済みページなのでバッジは一切出さない -->
                </div>
                <div class="card-info">
                    <h3 class="car-name">${car.name}</h3>
                    <p class="car-price">🐾 コミコミ <span>${car.price}</span> 万円</p>
                </div>
            </a>
        `;
    });
    
    if(soldCars.length === 0) {
        html = '<p style="text-align:center; padding:50px;">売約済みの車両はありません。</p>';
    }
    container.innerHTML = html;
}

// ▼ 車の詳細画面を生成する関数
function renderCarDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const car = carData.find(c => c.id === id);
    const container = document.getElementById('car-detail-container');

    if(!car) {
        container.innerHTML = '<p style="text-align:center; padding:50px;">車両データが見つかりません。</p>';
        return;
    }

    let specsHtml = '';
    if(car.specs) {
        car.specs.forEach(spec => {
            specsHtml += `<tr><th>${spec.title}</th><td>${spec.text}</td></tr>`;
        });
    }

    container.innerHTML = `
        <div class="detail-header">
            <p class="detail-catch">${car.catchphrase}</p>
            <h2 class="detail-title">${car.name}</h2>
            <p class="detail-price">🐾 コミコミ乗り出し価格 <span>${car.price}</span> 万円</p>
        </div>
        
        <div class="detail-main-img">
            <img src="${car.mainImage}" alt="${car.name}">
        </div>

        <table class="ta1">
            ${specsHtml}
        </table>

        <div class="free-text-area">
            ${car.freeText}
        </div>
    `;
}