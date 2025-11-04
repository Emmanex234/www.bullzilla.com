import { s as a } from "./user.store.DDbqc5Ve.js";
import { a as r, b as s, w as d } from "./decimal.CDs4sIOQ.js";
import "./cjs.Wk7D1Z2j.js";
import { t as m } from "./string.util.S84tFpHI.js";
import { d as l } from "./disconnect.fQnpZ0pp.js";
import "./hooks.util.DkhtTP5z.js";
import "./solid.BOcJR1a7.js";
import "./signMessage.3Mx73CFm.js";
import "./getConnectorClient.3iYCMqe6.js";
import "./toast.CtUDWD5L.js";
import "./store.D04cycSf.js";
import "./preload-helper.BlTxHScW.js";
import "./runtime.BjGO-K5b.js";
import "./clsx.B-dksMZM.js";
import "./data.util.DrQAEXmL.js";
let i = !1;
const e = Array.from(document.querySelectorAll("[data-connect-wallet-button]")),
  p = e.map((t) => t.innerHTML);
e.forEach((t) => {
  t.addEventListener("click", async () => {
    if (t.getAttribute("data-locked")) return;
    const { config: n } = await r(),
      o = s(n);
    o.isConnected && o.address ? l(n) : a();
  });
});
document.addEventListener("wagmi-loaded", async () => {
  const { config: t } = await r();
  d(t, {
    onChange: (n) => {
      (i = n.isConnected),
        i
          ? (document.body.classList.add("logged-in"),
            e.forEach((o) => {
              o.innerHTML = `Disconnect<br />(${m(n.address ?? "", 12)})`;
            }))
          : (document.body.classList.remove("logged-in"),
            e.forEach((o, c) => {
              o.innerHTML = p[c];
            }));
    },
  });
});
