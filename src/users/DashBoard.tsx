import orders from "../data/orders.json"

const DashBoard = () => {

    return (
        <div>
            <h2>관리자 대시보드</h2>
            <h3>주문 내역</h3>
            <div className="order-table-wrap">
                <table className="order-table">
                    <thead>
                        <tr>
                            <th>주문 ID</th>
                            <th>사용자 ID</th>
                            <th>상품명</th>
                            <th>수량</th>
                            <th>총액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order) => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.userId}</td>
                                    <td>{order.productId}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.totalPrice}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashBoard;