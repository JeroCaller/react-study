import { useNavigate } from "react-router";

const Products = () => {

  const mockData = [
    {
      id: 1,
      name: "포도주스",
      price: "5000"
    },
    {
      id: 2,
      name: "제로콜라",
      price: "2000"
    },
  ];

  const navigator = useNavigate();

  const handleClickButton = () => {
    if (confirm("정말로 메인으로 이동하시겠습니까?")) {
      navigator("/");
    }
  };

  return (
    <div>
      <h1>상품 목록</h1>
      <button onClick={handleClickButton}>메인으로</button>
      <table border="1">
        <thead>
          <tr>
            <th>상품번호</th>
            <th>상품명</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((data) => <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.price}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
