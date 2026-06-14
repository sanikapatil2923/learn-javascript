document.body.style.margin = "0";

const card = document.createElement("div");
card.style.width = "320px";
card.style.background = "#1f1f1f";
card.style.color = "white";
card.style.borderRadius = "25px";
card.style.overflow = "hidden";
card.style.fontFamily = "Arial, sans-serif";

const banner = document.createElement("div");
banner.style.height = "120px";
banner.style.backgroundImage = "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800')";
banner.style.backgroundSize = "cover";
banner.style.backgroundPosition = "center";

const content = document.createElement("div");
content.style.padding = "15px";
content.style.position = "relative";

const profile = document.createElement("img");
profile.src = "https://randomuser.me/api/portraits/women/65.jpg";
profile.style.width = "90px";
profile.style.height = "90px";
profile.style.borderRadius = "50%";
profile.style.border = "4px solid white";
profile.style.position = "absolute";
profile.style.top = "-55px";
profile.style.left = "15px";

const name = document.createElement("h2");
name.textContent = "ARSHIYA IRAM";
name.style.marginTop = "45px";

const role = document.createElement("p");
role.textContent =
  "Aspiring Data Scientist || Artificial Intelligence || Machine Learning";

const company = document.createElement("p");
company.textContent =
  "Bharat Intern · Maulana Mukhtar Ahmed Nadvi Technical Campus";

const location = document.createElement("p");
location.textContent = "Nasik, Maharashtra, India";

const connections = document.createElement("p");
connections.textContent = "500+ connections";

const btnContainer = document.createElement("div");
btnContainer.style.display = "flex";
btnContainer.style.gap = "10px";

const messageBtn = document.createElement("button");
messageBtn.textContent = "Message";
messageBtn.style.flex = "1";
messageBtn.style.padding = "10px";
messageBtn.style.background = "#0a66c2";
messageBtn.style.color = "white";
messageBtn.style.border = "none";
messageBtn.style.borderRadius = "25px";

const followBtn = document.createElement("button");
followBtn.textContent = "+ Follow";
followBtn.style.flex = "1";
followBtn.style.padding = "10px";
followBtn.style.background = "transparent";
followBtn.style.color = "#0a66c2";
followBtn.style.border = "2px solid #0a66c2";
followBtn.style.borderRadius = "25px";

btnContainer.appendChild(messageBtn);
btnContainer.appendChild(followBtn);

content.appendChild(profile);
content.appendChild(name);
content.appendChild(role);
content.appendChild(company);
content.appendChild(location);
content.appendChild(connections);
content.appendChild(btnContainer);

card.appendChild(banner);
card.appendChild(content);

document.body.appendChild(card);