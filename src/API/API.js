import axios from "axios";

const URL = "https://server-itra-final.herokuapp.com";
const imageURL =
  "https://api.imgbb.com/1/upload?key=0e2db278d43c96605cd5f851491a9e30";

//Auth control  ===== AUTH
export async function GetAuthState() {
  const response = await axios.get(URL + "/auth/auth", {
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    },
  });
  return response;
}

export async function PostSignUser(data) {
  const response = await axios.post(URL + "/auth", {
    username: data.username,
    password: data.password,
    role : data.role
  });
  return response; 
}

export async function GetUsers () {
  const response = await axios.get(URL + "/auth/list")
  return response.data
}

export async function PostLogUser(data) {
  const response = await axios.post(URL + "/auth/login", {
    username: data.username,
    password: data.password,
    role : data.role
  });
  return response;
}

export async function ChangeUserName(id, name) {
  axios.put(URL + `/auth/${id}`, name)
}

//All Problems ===== PROBLEMS
export async function GetAllProblems() {
  const response = await axios.get(URL + "/problems");
  return response.data;
}

export async function PostProblem(values) {
  await axios.post(URL + "/problems", values, {
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
}

//Problem by id ===== OBJECT
export async function GetOneProblem(id) {
  const response = await axios.get(URL + `/problems/byId/${id}`);
  return response.data;
}

export async function DeleteProblem(id) {
  const response = await axios.delete(URL + `/problems/${id}`);
  return response.data;
}

export async function PutProblemUpdate(id, values) {
  const response = await axios.put(URL + `/problems/${id}`, values);
  return response.data;
}

//Porblem's ===== COMMENTS
export async function PostComment(newComment, id) {
  const response = await axios.post(
    URL + "/comments",
    {
      commentBody: newComment,
      ProblemId: id,
    },
    {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }
  );
  return response.data;
}

export async function GetComments(id) {
  const response = await axios.get(URL + `/comments/${id}`);
  return response.data;
}

export async function DeleteComment(id) {
  await axios.delete(URL + `/comments/${id}`, {
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
}

//Problem's ===== RATE
export async function PostProblemRate(id, value) {
  const response = await axios.post(
    URL + "/rate",
    {
      ProblemID: id,
      rate: value,
    },
    { headers: { accessToken: localStorage.getItem("accessToken") } }
  );
  return response.data;
}

export async function PutProblemRate(id, average) {
  await axios.put(URL + `/problems/${id}`, { rate: average });
}

//Answer problem ===== ANSWER
export async function PostAnswer(id) {
  const response = await axios.post(
    URL + "/usersinfo",
    {
      ProblemID: id,
    },
    { headers: { accessToken: localStorage.getItem("accessToken") } }
  );
  return response.data;
}

export async function GetAnswers(id) {
  const response = await axios.get(URL + `/usersinfo/${id}`);
  return response.data;
}

// ====== IMAGES
export async function PostImages(body) {
  const response = await axios.post(imageURL, body);
  return response;
}
