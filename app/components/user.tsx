"use client";

const user = {
  name: "Krish Sharma",
  email: "Krishsharma3355@gmail.com",
  address: "xyz street",
  imgUrl:
    "https://imgs.search.brave.com/QA-amLvWt4EMP1HCblsUEpXRa2lNG2vCRk-spFH7krg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wODQv/NDU3LzIzMS9zbWFs/bC95b3VuZy1tYW4t/cHJvZmlsZS1pY29u/LXdpdGgtY2FzdWFs/LWNsb3RoaW5nLWFu/ZC1mcmllbmRseS1m/bGF0LWljb24tYXZh/dGFyLWZvci11c2Vy/LXByb2ZpbGUtYW5k/LWRpZ2l0YWwtaWRl/bnRpdHktY2xlYW4t/bW9kZXJuLWlsbHVz/dHJhdGlvbi1pZGVh/bC1mb3ItaW50ZXJm/YWNlLWRhc2hib2Fy/ZC1jb250YWN0LWZy/ZWUtdmVjdG9yLmpw/Zw",
  height: 90,
};

export function User() {
  return (
    <div>
      <img
        src={user.imgUrl}
        alt={"image of user" + user.name}
        style={{
          width: user.height,
          height: user.height,
          borderRadius: 100
        }}
      />
      <h2>Name: {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </div>
  );
}
