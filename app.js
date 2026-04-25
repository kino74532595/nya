// app.js
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('car-list-container')) {
        renderCarList();
    }
    if (document.getElementById('car-detail-container')) {
        renderCarDetail();
    }
});

// 在庫車一覧を生成する関数
function renderCarList() {
    const container = document.getElementById('car-list-container');
    let html = '';

    carData.forEach(car => {
        let badgeClass = 'badge-sale';
        if(car.status === '商談中') badgeClass = 'badge-negotiation';
        if(car.status === '売約済') badgeClass = 'badge-sold';

        html += `
            <a href="detail.html?id=${car.id}" class="car-card">
                <div class="card-img-wrapper">
                    <img src="${car.mainImage}" alt="${car.name}">
                    <span class="status-badge ${badgeClass}">${car.status}</span>
                </div>
                <div class="card-info">
                    <h3 class="car-name">${car.name}</h3>
                    <p class="car-price">コミコミ <span>${car.price}</span> 万円</p>
                </div>
            </a>
        `;
    });
    container.innerHTML = html;
}

// 車の詳細画面を生成する関数
function renderCarDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const car = carData.find(c => c.id === id);
    const container = document.getElementById('car-detail-container');

    if(!car) {
        container.innerHTML = '<p style="text-align:center; padding:50px;">車両データが見つかりません。</p>';
        return;
    }

    // スペック表の行を組み立てる
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
            <p class="detail-price">コミコミ乗り出し価格 <span>${car.price}</span> 万円</p>
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