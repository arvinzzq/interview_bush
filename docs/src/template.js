function template(str, data) {
  const fn = new Function("obj",

    "var p = []; with(obj){p.push('" +
    str
      .replace(/[\r\t\n]/g, "")
      .replace(/<%=(.*?)%>/g, "');p.push($1);p.push('")
      .replace(/<%/g, "');")
      .replace(/%>/g, "p.push('")
    + "');}return p.join('');");

  return fn.call(this, data);
};

const html = `
<script type="text/html" id="user_tmpl">
    <%for ( var i = 0; i < users.length; i++ ) { %>
        <li>
            <a href="<%=users[i].url%>">
                <%=users[i].name%>
            </a>
        </li>
    <% } %>
</script>
`;

const users = [
  { "name": "Byron", "url": "http://localhost" },
  { "name": "Casper", "url": "http://localhost" },
  { "name": "Frank", "url": "http://localhost" }
];

// var users = [{"name": "Kevin", "url": "http://localhost"}];

// var p = [];
// for (var i = 0; i < users.length; i++) {
//     p.push('<li><a href="');
//     p.push(users[i].url);
//     p.push('">');
//     p.push(users[i].name);
//     p.push('</a></li>');
// }

// console.log(p.join('')) // <li><a href="http://localhost">Kevin</a></li>

const res = template(html, { users });
console.log('res: ', res);