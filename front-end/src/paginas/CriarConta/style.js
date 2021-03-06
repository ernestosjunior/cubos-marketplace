import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "24px",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "392px",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "16px",
    gap: "48px",
    padding: "60px 0px ",
  },
  form: {
    display: "flex",
    gap: "40px",
    flexDirection: "column",
    padding: "0px 78px ",
  },
  footer: {
    fontSize: "12px",
  },
  progresso: {
    alignSelf: "center",
  },
  botao: {
    width: "126px",
    alignSelf: "center",
  },
  alerta: {
    display: "flex",
    alignItems: "center",
    padding: "2px 8px",
    fontSize: "10px",
  },
}));
