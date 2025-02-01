const FileCard = ({ fileInfo }) => {

  return (
    <li key={fileInfo.id} className="file-card">
      {/* DB로부터 가져온 파일 경로의 맨 앞에 "."이 붙어있으므로, 이를 제거해야 이미지가 정상적으로 출력됨. */}
      <img src={fileInfo.filePath.substring(1)} width="50%" />
      <p>id: {fileInfo.id}</p>
      <p>path: {fileInfo.filePath}</p>
      {/*<button onClick={handleDownload}>다운로드</button> */}
      <a href={`http://localhost:8080/files/download/${fileInfo.id}`}>다운로드</a>
    </li>
  );
};

export default FileCard;
