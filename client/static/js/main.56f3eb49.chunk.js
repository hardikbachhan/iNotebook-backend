(this.webpackJsonpinotebook = this.webpackJsonpinotebook || []).push([
  [0],
  {
    27: function (e, t, a) {},
    28: function (e, t, a) {},
    36: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(1),
        n = a.n(s),
        c = a(21),
        r = a.n(c),
        o = (a(27), a(7)),
        i = (a(28), a(11)),
        l = a(2),
        d = a(0),
        j = function () {
          var e = Object(l.f)(),
            t = Object(l.g)();
          return Object(d.jsx)(d.Fragment, {
            children: Object(d.jsx)("nav", {
              className: "navbar navbar-expand-lg navbar-dark bg-dark",
              children: Object(d.jsxs)("div", {
                className: "container-fluid",
                children: [
                  Object(d.jsx)(i.b, {
                    className: "navbar-brand",
                    to: "/",
                    children: "iNotebook",
                  }),
                  Object(d.jsx)("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: Object(d.jsx)("span", {
                      className: "navbar-toggler-icon",
                    }),
                  }),
                  Object(d.jsxs)("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: [
                      Object(d.jsxs)("ul", {
                        className: "navbar-nav me-auto mb-2 mb-lg-0",
                        children: [
                          Object(d.jsx)("li", {
                            className: "nav-item",
                            children: Object(d.jsx)(i.b, {
                              className: "nav-link ".concat(
                                "/" === t.pathname ? "active" : ""
                              ),
                              "aria-current": "page",
                              to: "/",
                              children: "Home",
                            }),
                          }),
                          Object(d.jsx)("li", {
                            className: "nav-item",
                            children: Object(d.jsx)(i.b, {
                              className: "nav-link ".concat(
                                "/about" === t.pathname ? "active" : ""
                              ),
                              to: "/about",
                              children: "About",
                            }),
                          }),
                        ],
                      }),
                      localStorage.getItem("token")
                        ? Object(d.jsx)("button", {
                            className: "btn btn-sm btn-dark",
                            onClick: function () {
                              localStorage.removeItem("token"),
                                e.push("/login");
                            },
                            children: "Logout",
                          })
                        : Object(d.jsxs)("form", {
                            className: "d-flex",
                            children: [
                              Object(d.jsx)(i.b, {
                                className: "btn-sm btn-dark mx-2",
                                to: "/login",
                                role: "button",
                                style: { textDecoration: "none" },
                                children: "Login",
                              }),
                              Object(d.jsx)(i.b, {
                                className: "btn-sm btn-dark mx-2",
                                to: "/signup",
                                role: "button",
                                style: { textDecoration: "none" },
                                children: "SignUp",
                              }),
                            ],
                          }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        b = a(10),
        m = a(8),
        u = Object(s.createContext)(),
        h = function (e) {
          var t = Object(s.useContext)(u).addNote,
            a = Object(s.useState)({ title: "", description: "", tag: "" }),
            n = Object(o.a)(a, 2),
            c = n[0],
            r = n[1],
            i = function (e) {
              r(
                Object(m.a)(
                  Object(m.a)({}, c),
                  {},
                  Object(b.a)({}, e.target.name, e.target.value)
                )
              );
            };
          return Object(d.jsxs)("div", {
            className: "container my-3",
            children: [
              Object(d.jsx)("h2", { children: "Add a Note" }),
              Object(d.jsxs)("form", {
                className: "my-3",
                children: [
                  Object(d.jsxs)("div", {
                    className: "form-group my-3",
                    children: [
                      Object(d.jsx)("label", {
                        htmlFor: "title",
                        children: "Title",
                      }),
                      Object(d.jsx)("input", {
                        type: "text",
                        className: "form-control my-2",
                        id: "title",
                        name: "title",
                        value: c.title,
                        onChange: i,
                        minLength: 5,
                        required: !0,
                      }),
                    ],
                  }),
                  Object(d.jsxs)("div", {
                    className: "form-group my-3",
                    children: [
                      Object(d.jsx)("label", {
                        htmlFor: "description",
                        children: "Description",
                      }),
                      Object(d.jsx)("input", {
                        type: "text",
                        className: "form-control my-2",
                        id: "description",
                        name: "description",
                        value: c.description,
                        onChange: i,
                        minLength: 5,
                        required: !0,
                      }),
                    ],
                  }),
                  Object(d.jsxs)("div", {
                    className: "form-group my-3",
                    children: [
                      Object(d.jsx)("label", {
                        htmlFor: "tag",
                        children: "Tag",
                      }),
                      Object(d.jsx)("input", {
                        type: "text",
                        className: "form-control my-2",
                        id: "tag",
                        name: "tag",
                        value: c.tag,
                        onChange: i,
                      }),
                    ],
                  }),
                  Object(d.jsx)("button", {
                    disabled: c.title.length < 5 || c.description.length < 5,
                    type: "submit",
                    className: "btn btn-dark",
                    onClick: function (a) {
                      a.preventDefault(),
                        t(c.title, c.description, c.tag),
                        r({ title: "", description: "", tag: "default" }),
                        e.showAlert("Added successfully", "success");
                    },
                    children: "Add Note",
                  }),
                ],
              }),
            ],
          });
        },
        p = function (e) {
          var t = e.note,
            a = e.updateNote,
            n = Object(s.useContext)(u).deleteNote;
          return Object(d.jsx)("div", {
            className: "col-md-3",
            children: Object(d.jsx)("div", {
              className: "card my-3",
              children: Object(d.jsxs)("div", {
                className: "card-body",
                children: [
                  Object(d.jsxs)("div", {
                    className: "d-flex align-items-center",
                    children: [
                      Object(d.jsx)("h5", {
                        className: "card-title",
                        children: t.title,
                      }),
                      Object(d.jsx)("i", {
                        className: "far fa-edit mx-3",
                        onClick: function () {
                          a(t);
                        },
                      }),
                      Object(d.jsx)("i", {
                        className: "far fa-trash-alt mx-2",
                        onClick: function () {
                          n(t._id),
                            e.showAlert("Deleted successfully", "success");
                        },
                      }),
                    ],
                  }),
                  Object(d.jsx)("p", {
                    className: "card-text",
                    children: t.description,
                  }),
                ],
              }),
            }),
          });
        },
        x = function (e) {
          var t = Object(s.useContext)(u),
            a = t.notes,
            n = t.getNotes,
            c = t.editNote,
            r = Object(l.f)();
          Object(s.useEffect)(function () {
            localStorage.getItem("token") ? n() : r.push("/login");
          });
          var i = Object(s.useRef)(null),
            j = Object(s.useRef)(null),
            x = Object(s.useState)({
              id: "",
              etitle: "",
              edescription: "",
              etag: "",
            }),
            O = Object(o.a)(x, 2),
            g = O[0],
            f = O[1],
            v = function (e) {
              i.current.click(),
                f({
                  id: e._id,
                  etitle: e.title,
                  edescription: e.description,
                  etag: e.tag,
                });
            },
            N = function (e) {
              f(
                Object(m.a)(
                  Object(m.a)({}, g),
                  {},
                  Object(b.a)({}, e.target.name, e.target.value)
                )
              );
            };
          return Object(d.jsxs)(d.Fragment, {
            children: [
              Object(d.jsx)(h, { showAlert: e.showAlert }),
              Object(d.jsx)("button", {
                type: "button",
                className: "btn btn-primary d-none",
                "data-bs-toggle": "modal",
                "data-bs-target": "#exampleModal",
                ref: i,
                children: "Launch demo modal",
              }),
              Object(d.jsx)("div", {
                className: "modal fade",
                id: "exampleModal",
                tabIndex: "-1",
                "aria-labelledby": "exampleModalLabel",
                "aria-hidden": "true",
                children: Object(d.jsx)("div", {
                  className: "modal-dialog",
                  children: Object(d.jsxs)("div", {
                    className: "modal-content",
                    children: [
                      Object(d.jsxs)("div", {
                        className: "modal-header",
                        children: [
                          Object(d.jsx)("h5", {
                            className: "modal-title",
                            id: "exampleModalLabel",
                            children: "Edit Note",
                          }),
                          Object(d.jsx)("button", {
                            type: "button",
                            className: "btn-close",
                            "data-bs-dismiss": "modal",
                            "aria-label": "Close",
                          }),
                        ],
                      }),
                      Object(d.jsx)("div", {
                        className: "modal-body",
                        children: Object(d.jsxs)("form", {
                          className: "my-3",
                          children: [
                            Object(d.jsxs)("div", {
                              className: "form-group",
                              children: [
                                Object(d.jsx)("label", {
                                  htmlFor: "title",
                                  children: "Title",
                                }),
                                Object(d.jsx)("input", {
                                  type: "text",
                                  className: "form-control my-2",
                                  id: "etitle",
                                  name: "etitle",
                                  value: g.etitle,
                                  onChange: N,
                                  minLength: 5,
                                  required: !0,
                                }),
                              ],
                            }),
                            Object(d.jsxs)("div", {
                              className: "form-group",
                              children: [
                                Object(d.jsx)("label", {
                                  htmlFor: "description",
                                  children: "Description",
                                }),
                                Object(d.jsx)("input", {
                                  type: "text",
                                  className: "form-control my-2",
                                  id: "edescription",
                                  name: "edescription",
                                  value: g.edescription,
                                  onChange: N,
                                  minLength: 5,
                                  required: !0,
                                }),
                              ],
                            }),
                            Object(d.jsxs)("div", {
                              className: "form-group",
                              children: [
                                Object(d.jsx)("label", {
                                  htmlFor: "tag",
                                  children: "Tag",
                                }),
                                Object(d.jsx)("input", {
                                  type: "text",
                                  className: "form-control my-2",
                                  id: "etag",
                                  name: "etag",
                                  value: g.etag,
                                  onChange: N,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(d.jsxs)("div", {
                        className: "modal-footer",
                        children: [
                          Object(d.jsx)("button", {
                            ref: j,
                            type: "button",
                            className: "btn btn-secondary",
                            "data-bs-dismiss": "modal",
                            children: "Close",
                          }),
                          Object(d.jsx)("button", {
                            disabled:
                              g.etitle.length < 5 || g.edescription.length < 5,
                            type: "button",
                            className: "btn btn-primary",
                            onClick: function (t) {
                              c(g.id, g.etitle, g.edescription, g.etag),
                                j.current.click(),
                                e.showAlert("Updated successfully", "success");
                            },
                            children: "Update Note",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              Object(d.jsxs)("div", {
                className: "row mt-3",
                children: [
                  Object(d.jsx)("h2", { children: "Your Notes" }),
                  Object(d.jsx)("div", {
                    className: "container mx-3",
                    children:
                      0 === a.length &&
                      Object(d.jsx)("p", { children: "No Notes to display." }),
                  }),
                  a.map(function (t) {
                    return Object(d.jsx)(
                      p,
                      { note: t, updateNote: v, showAlert: e.showAlert },
                      t._id
                    );
                  }),
                ],
              }),
            ],
          });
        },
        O = function (e) {
          return Object(d.jsx)("div", {
            children: Object(d.jsx)(x, { showAlert: e.showAlert }),
          });
        },
        g = function () {
          return Object(d.jsx)("div", {
            children: Object(d.jsxs)("div", {
              className: "container",
              children: [
                Object(d.jsx)("h1", { children: "About Us" }),
                Object(d.jsx)("h6", {
                  children:
                    "iNotebook is a cross-platform note-taking app that\u2019s great for joting down day to day tasks and Todos. It comes with a taging feature which can be used to segregate notes.",
                }),
                Object(d.jsx)("h6", {
                  children:
                    "Editing and Deleting notes is as easy as it could be. Enjoy scripting your day to day work and saving them as cards for efficient work flow and easy managing.",
                }),
                Object(d.jsx)("h5", {
                  className: "mt-5",
                  children: "Source code can be found at: ",
                }),
                Object(d.jsxs)("h6", {
                  children: [
                    " ",
                    Object(d.jsx)("a", {
                      href: "https://github.com/hardikbachhan/iNotebook-frontend",
                      children: "Frontend Repository",
                    }),
                    " ",
                  ],
                }),
                Object(d.jsxs)("h6", {
                  children: [
                    " ",
                    Object(d.jsx)("a", {
                      href: "https://github.com/hardikbachhan/iNotebook-backend",
                      children: "Backend Repository",
                    }),
                    " ",
                  ],
                }),
              ],
            }),
          });
        },
        f = a(4),
        v = a.n(f),
        N = a(12),
        y = function (e) {
          var t = "https://i-notebook-app-hb.herokuapp.com",
            a = Object(s.useState)([]),
            n = Object(o.a)(a, 2),
            c = n[0],
            r = n[1],
            i = (function () {
              var e = Object(N.a)(
                v.a.mark(function e() {
                  var a, s;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("".concat(t, "/api/notes/fetchallnotes"), {
                              method: "GET",
                              headers: {
                                "Content-Type": "application/json",
                                "auth-token": localStorage.getItem("token"),
                              },
                            })
                          );
                        case 2:
                          return (a = e.sent), (e.next = 5), a.json();
                        case 5:
                          (s = e.sent), r(s);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            l = (function () {
              var e = Object(N.a)(
                v.a.mark(function e(a, s, n) {
                  var o, i;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("".concat(t, "/api/notes/addnote"), {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                                "auth-token": localStorage.getItem("token"),
                              },
                              body: JSON.stringify({
                                title: a,
                                description: s,
                                tag: n,
                              }),
                            })
                          );
                        case 2:
                          return (o = e.sent), (e.next = 5), o.json();
                        case 5:
                          (i = e.sent), r(c.concat(i));
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, a, s) {
                return e.apply(this, arguments);
              };
            })(),
            j = (function () {
              var e = Object(N.a)(
                v.a.mark(function e(a, s, n, o) {
                  var i, l, d;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch(
                              "".concat(t, "/api/notes/updatenote/").concat(a),
                              {
                                method: "PUT",
                                headers: {
                                  "Content-Type": "application/json",
                                  "auth-token": localStorage.getItem("token"),
                                },
                                body: JSON.stringify({
                                  title: s,
                                  description: n,
                                  tag: o,
                                }),
                              }
                            )
                          );
                        case 2:
                          return (i = e.sent), (e.next = 5), i.json();
                        case 5:
                          (l = e.sent),
                            console.log(l),
                            (d = c.map(function (e) {
                              return (
                                e._id === a &&
                                  ((e.title = s),
                                  (e.description = n),
                                  (e.tag = o)),
                                e
                              );
                            })),
                            r(d);
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, a, s, n) {
                return e.apply(this, arguments);
              };
            })(),
            b = (function () {
              var e = Object(N.a)(
                v.a.mark(function e(a) {
                  var s, n, o;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch(
                              "".concat(t, "/api/notes/deletenote/").concat(a),
                              {
                                method: "DELETE",
                                headers: {
                                  "Content-Type": "application/json",
                                  "auth-token": localStorage.getItem("token"),
                                },
                              }
                            )
                          );
                        case 2:
                          return (s = e.sent), (e.next = 5), s.json();
                        case 5:
                          (n = e.sent),
                            console.log(n),
                            (o = c.filter(function (e) {
                              return a !== e._id;
                            })),
                            r(o);
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(d.jsx)(u.Provider, {
            value: {
              notes: c,
              getNotes: i,
              addNote: l,
              editNote: j,
              deleteNote: b,
            },
            children: e.children,
          });
        },
        w = function (e) {
          return Object(d.jsx)("div", {
            style: { height: "50px" },
            children:
              e.alert &&
              Object(d.jsxs)("div", {
                className: "alert alert-".concat(
                  e.alert.type,
                  " alert-dismissible fade show"
                ),
                role: "alert",
                children: [
                  Object(d.jsx)("strong", {
                    children: (function (e) {
                      if ("danger" === e) return (e = "Error");
                      var t = e.toLowerCase();
                      return t.charAt(0).toUpperCase() + t.slice(1);
                    })(e.alert.type),
                  }),
                  ": ",
                  e.alert.msg,
                ],
              }),
          });
        },
        k = a(15),
        S = a.n(k),
        C = function (e) {
          var t = Object(s.useState)({ email: "", password: "" }),
            a = Object(o.a)(t, 2),
            n = a[0],
            c = a[1],
            r = Object(l.f)(),
            i = function (e) {
              c(
                Object(m.a)(
                  Object(m.a)({}, n),
                  {},
                  Object(b.a)({}, e.target.name, e.target.value)
                )
              );
            },
            j = (function () {
              var t = Object(N.a)(
                v.a.mark(function t(a) {
                  var s, c;
                  return v.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            a.preventDefault(),
                            "https://i-notebook-app-hb.herokuapp.com",
                            (t.next = 4),
                            fetch(
                              "".concat(
                                "https://i-notebook-app-hb.herokuapp.com",
                                "/api/auth/login"
                              ),
                              {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                  email: n.email,
                                  password: n.password,
                                }),
                              }
                            )
                          );
                        case 4:
                          return (s = t.sent), (t.next = 7), s.json();
                        case 7:
                          (c = t.sent).success
                            ? (localStorage.setItem("token", c.authToken),
                              e.showAlert("Logged in successfully.", "success"),
                              r.push("/"))
                            : e.showAlert(c.error, "danger");
                        case 9:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          return Object(d.jsxs)("div", {
            className: "container",
            children: [
              Object(d.jsx)("div", {
                className: "mb-3",
                style: { fontSize: "3rem" },
                children: Object(d.jsx)(S.a, {
                  strings: [
                    "Login to continue to iNotebook...",
                    "This is a simple Note taking App...",
                  ],
                  typeSpeed: 40,
                  smartBackspace: "true",
                  backSpeed: 40,
                  loop: !0,
                }),
              }),
              Object(d.jsxs)("div", {
                className: "row",
                children: [
                  Object(d.jsx)("div", {
                    className: "col-lg-8",
                    style: {
                      background:
                        "url('https://images.ctfassets.net/lzny33ho1g45/66zDmwVz2N4aN4k589RRjB/36f5339cd45ed61b6560292a696e91d5/notes?w=1400') no-repeat center center",
                      padding: "0",
                      height: "450px",
                      width: "750px",
                    },
                  }),
                  Object(d.jsx)("div", {
                    className: "col-lg-4",
                    style: { padding: "80px 0 50px 30px" },
                    children: Object(d.jsxs)("form", {
                      onSubmit: j,
                      children: [
                        Object(d.jsxs)("div", {
                          className: "mb-3",
                          children: [
                            Object(d.jsx)("label", {
                              htmlFor: "email",
                              className: "form-label",
                              children: "Email address",
                            }),
                            Object(d.jsx)("input", {
                              type: "email",
                              className: "form-control",
                              id: "email",
                              name: "email",
                              "aria-describedby": "emailHelp",
                              value: n.email,
                              onChange: i,
                              required: !0,
                            }),
                            Object(d.jsx)("div", {
                              id: "emailHelp",
                              className: "form-text",
                              children:
                                "We'll never share your email with anyone else.",
                            }),
                          ],
                        }),
                        Object(d.jsxs)("div", {
                          className: "mb-3",
                          children: [
                            Object(d.jsx)("label", {
                              htmlFor: "password",
                              className: "form-label",
                              children: "Password",
                            }),
                            Object(d.jsx)("input", {
                              type: "password",
                              className: "form-control",
                              id: "password",
                              name: "password",
                              value: n.password,
                              onChange: i,
                              required: !0,
                              minLength: 5,
                            }),
                          ],
                        }),
                        Object(d.jsx)("button", {
                          type: "submit",
                          className: "btn btn-dark",
                          children: "Submit",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        A = function (e) {
          var t = Object(s.useState)({
              name: "",
              email: "",
              password: "",
              cpassword: "",
            }),
            a = Object(o.a)(t, 2),
            n = a[0],
            c = a[1],
            r = Object(l.f)(),
            i = function (e) {
              c(
                Object(m.a)(
                  Object(m.a)({}, n),
                  {},
                  Object(b.a)({}, e.target.name, e.target.value)
                )
              );
            },
            j = (function () {
              var t = Object(N.a)(
                v.a.mark(function t(a) {
                  var s, o, i, l, d, j, b;
                  return v.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (a.preventDefault(),
                            (s = "https://i-notebook-app-hb.herokuapp.com"),
                            (o = n.name),
                            (i = n.email),
                            (l = n.password),
                            (d = n.cpassword),
                            l === d)
                          ) {
                            t.next = 7;
                            break;
                          }
                          return (
                            e.showAlert("Invalid Credentials.", "danger"),
                            c({
                              name: "",
                              email: "",
                              password: "",
                              cpassword: "",
                            }),
                            t.abrupt("return")
                          );
                        case 7:
                          return (
                            (t.next = 9),
                            fetch("".concat(s, "/api/auth/createuser"), {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({
                                name: o,
                                email: i,
                                password: l,
                              }),
                            })
                          );
                        case 9:
                          return (j = t.sent), (t.next = 12), j.json();
                        case 12:
                          (b = t.sent).success
                            ? (localStorage.setItem("token", b.authToken),
                              r.push("/"),
                              e.showAlert(
                                "Account created Successfully.",
                                "success"
                              ))
                            : (e.showAlert(b.error, "danger"),
                              c({
                                name: "",
                                email: "",
                                password: "",
                                cpassword: "",
                              }));
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          return Object(d.jsxs)("div", {
            className: "container",
            children: [
              Object(d.jsx)("div", {
                className: "mb-4",
                style: { fontSize: "3rem" },
                children: Object(d.jsx)(S.a, {
                  strings: ["Create an Account to use iNotebook..."],
                  typeSpeed: 40,
                  smartBackspace: "true",
                  backSpeed: 40,
                  loop: !0,
                }),
              }),
              Object(d.jsxs)("div", {
                className: "row",
                children: [
                  Object(d.jsx)("div", {
                    className: "col-lg-8",
                    style: {
                      background:
                        "url('https://live.staticflickr.com/1540/25192961495_a422a0f172_b.jpg') no-repeat center center",
                      padding: "0",
                      height: "450px",
                      width: "750px",
                    },
                  }),
                  Object(d.jsx)("div", {
                    className: "col-lg-4",
                    style: { padding: "15px 0 50px 30px" },
                    children: Object(d.jsxs)("form", {
                      onSubmit: j,
                      children: [
                        Object(d.jsxs)("div", {
                          className: "mb-3",
                          children: [
                            Object(d.jsx)("label", {
                              htmlFor: "name",
                              className: "form-label",
                              children: "Name",
                            }),
                            Object(d.jsx)("input", {
                              type: "text",
                              className: "form-control",
                              id: "name",
                              name: "name",
                              value: n.name,
                              onChange: i,
                              required: !0,
                            }),
                          ],
                        }),
                        Object(d.jsxs)("div", {
                          className: "mb-3",
                          children: [
                            Object(d.jsx)("label", {
                              htmlFor: "email",
                              className: "form-label",
                              children: "Email address",
                            }),
                            Object(d.jsx)("input", {
                              type: "email",
                              className: "form-control",
                              id: "email",
                              name: "email",
                              "aria-describedby": "emailHelp",
                              value: n.email,
                              onChange: i,
                              required: !0,
                            }),
                            Object(d.jsx)("div", {
                              id: "emailHelp",
                              className: "form-text",
                              children:
                                "We'll never share your email with anyone else.",
                            }),
                          ],
                        }),
                        Object(d.jsxs)("div", {
                          className: "mb-3",
                          children: [
                            Object(d.jsx)("label", {
                              htmlFor: "password",
                              className: "form-label",
                              children: "Password",
                            }),
                            Object(d.jsx)("input", {
                              type: "password",
                              className: "form-control",
                              id: "password",
                              name: "password",
                              value: n.password,
                              onChange: i,
                              required: !0,
                              minLength: 5,
                            }),
                          ],
                        }),
                        Object(d.jsxs)("div", {
                          className: "mb-3",
                          children: [
                            Object(d.jsx)("label", {
                              htmlFor: "cpassword",
                              className: "form-label",
                              children: "Confirm Password",
                            }),
                            Object(d.jsx)("input", {
                              type: "password",
                              className: "form-control",
                              id: "cpassword",
                              name: "cpassword",
                              value: n.cpassword,
                              onChange: i,
                              required: !0,
                              minLength: 5,
                            }),
                          ],
                        }),
                        Object(d.jsx)("button", {
                          type: "submit",
                          className: "btn btn-dark",
                          children: "Submit",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      var T = function () {
        var e = new Date().getFullYear();
        return Object(d.jsxs)("div", {
          className: "d-flex footer row text-center bg-dark",
          style: {
            position: "relative",
            bottom: 0,
            width: "100%",
            color: "white",
            margin: "30px 0 0 0",
          },
          children: [
            Object(d.jsx)("p", {
              className: "mt-4",
              children: "Made with \u2764\ufe0f in Delhi, India.",
            }),
            Object(d.jsxs)("p", {
              className: "mb-3",
              style: { marginBelow: "0" },
              children: ["Hardik Bachhan @ ", e, "."],
            }),
          ],
        });
      };
      var F = function () {
        var e = Object(s.useState)(null),
          t = Object(o.a)(e, 2),
          a = t[0],
          n = t[1],
          c = function (e, t) {
            n({ msg: e, type: t }),
              setTimeout(function () {
                n(null);
              }, 1500);
          };
        return Object(d.jsx)(d.Fragment, {
          children: Object(d.jsx)(y, {
            children: Object(d.jsxs)(i.a, {
              children: [
                Object(d.jsx)(j, {}),
                Object(d.jsx)(w, { alert: a }),
                Object(d.jsx)("div", {
                  className: "container",
                  children: Object(d.jsxs)(l.c, {
                    children: [
                      Object(d.jsx)(l.a, {
                        exact: !0,
                        path: "/",
                        children: Object(d.jsx)(O, { showAlert: c }),
                      }),
                      Object(d.jsx)(l.a, {
                        exact: !0,
                        path: "/about",
                        children: Object(d.jsx)(g, {}),
                      }),
                      Object(d.jsx)(l.a, {
                        exact: !0,
                        path: "/login",
                        children: Object(d.jsx)(C, { showAlert: c }),
                      }),
                      Object(d.jsx)(l.a, {
                        exact: !0,
                        path: "/signup",
                        children: Object(d.jsx)(A, { showAlert: c }),
                      }),
                    ],
                  }),
                }),
                Object(d.jsx)(T, {}),
              ],
            }),
          }),
        });
      };
      r.a.render(
        Object(d.jsx)(n.a.StrictMode, { children: Object(d.jsx)(F, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[36, 1, 2]],
]);
//# sourceMappingURL=main.56f3eb49.chunk.js.map
