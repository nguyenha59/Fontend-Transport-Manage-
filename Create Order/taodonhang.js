    let productCount = 1;

    document.getElementById('addProductBtn').addEventListener('click', function() {
        productCount++;
        const productFields = document.getElementById('productFields');
        const newProductInfo = document.createElement('div');
        newProductInfo.className = 'product-info';
        newProductInfo.innerHTML = `
            <h5>Sản phẩm ${productCount}</h5>
            <div class="form-group">
                <label for="productName${productCount}">Tên sản phẩm:</label>
                <input type="text" class="form-control" id="productName${productCount}" required>
            </div>
            <div class="form-group">
                <label for="productPrice${productCount}">Giá sản phẩm (VND):</label>
                <input type="number" class="form-control" id="productPrice${productCount}" required oninput="calculateTotal()">
            </div>
            <div class="form-group">
                <label for="productWeight${productCount}">Cân nặng (kg):</label>
                <input type="number" class="form-control" id="productWeight${productCount}" required>
            </div>
            <div class="form-group">
                <label>Chọn phân loại hàng hóa:</label>
                <select class="form-control" id="productType${productCount}" required>
                    <option value="normal">Hàng thông thường</option>
                    <option value="fragile">Hàng dễ vỡ</option>
                    <option value="bulky">Hàng cồng kềnh</option>
                    <option value="liquid">Chất lỏng</option>
                    <option value="electronics">Hàng điện tử</option>
                    <option value="highValue">Hàng giá trị cao</option>
                </select>
            </div>
        `;
        productFields.appendChild(newProductInfo);
    });

    function calculateTotal() {
        let totalProductValue = 0;
        const productPrices = document.querySelectorAll('input[id^="productPrice"]');

        productPrices.forEach(input => {
            totalProductValue += Number(input.value) || 0;
        });

        document.getElementById('totalProductValue').innerText = totalProductValue + ' VND';

        const totalShipping = Number(document.getElementById('distance').value) * 10000 || 0; // Example: 10,000 VND per km
        document.getElementById('totalShipping').innerText = totalShipping + ' VND';

        const totalSurcharge = 0; // Example: can be set based on conditions
        document.getElementById('totalSurcharge').innerText = totalSurcharge + ' VND';

        const totalCOD = document.getElementById('paymentMethod').value === 'cashOnDelivery' ? 50000 : 0; // Example: 50,000 VND COD fee
        document.getElementById('totalCOD').innerText = totalCOD + ' VND';

        const totalAmount = totalProductValue + totalShipping + totalSurcharge + totalCOD;
        document.getElementById('totalAmount').innerText = totalAmount + ' VND';
    }

    // Add event listeners to recalculate on changes
    document.getElementById('distance').addEventListener('input', calculateTotal);
    document.getElementById('paymentMethod').addEventListener('change', calculateTotal);
