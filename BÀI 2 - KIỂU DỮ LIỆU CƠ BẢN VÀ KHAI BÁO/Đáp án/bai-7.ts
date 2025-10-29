let studentNames: string[] = ["Linh", "Hà", "Nam", "Trang"];

let studentScores: number[] = [8.5, 9.0, 7.5, 8.0];

studentNames.map((name, index) => {
  const score = studentScores[index];
  console.log(`${name} có số điểm là: ${score}`);
});
