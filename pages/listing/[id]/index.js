import { useRouter } from "next/router";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import Axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../../styles/listing.module.css";
import { markAssetError } from "next/dist/client/route-loader";

const index = () => {
  const [dd, setDd] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await Axios.post("/api/getdata1", { id: id }).then((res) => {
      console.log("dkdkd");
      if (res) {
        console.log("Done");
        setDd(res.data.dd[0]);
      }
    });
  };

  return (
    <Container fixed>
      <div>
        <Navbar />
      </div>
      {dd ? (
        <>
          <div className={styles.lidu3}>
            <Link href="/">
              <Button> Back to listing</Button>
            </Link>
          </div>
          <div className={styles.li_djs}>
            <h1>
              {" "}
              {dd.address} -{" "}
              <span className={styles.li_du8}>
                {" "}
                ${dd.amount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              </span>
            </h1>
            {/* <h> {dd.amount}</div> */}
          </div>

          <div className={styles.li_img}>
            <img src={dd.img} />
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              cursus malesuada nibh ac feugiat. Donec efficitur, lorem sit amet
              tincidunt ullamcorper, ligula mi semper urna, id tempor neque ante
              sit amet ipsum. Nulla lacinia viverra posuere. Quisque congue enim
              diam, et pulvinar tortor efficitur quis. Nunc sit amet feugiat
              erat. Quisque mollis euismod gravida. Aenean vel magna ac eros
              aliquam condimentum vestibulum at velit. Duis sit amet semper
              libero. In quis massa pretium, tempor elit eu, dignissim purus.{" "}
            </p>
            <p>
              {" "}
              Nullam vel justo mauris. Aenean blandit augue id est posuere
              commodo. Proin molestie sem vel nibh interdum faucibus. Nam et
              mollis purus. Fusce in ex ac diam pharetra accumsan. Mauris libero
              lorem, placerat eget metus ac, egestas feugiat risus. Suspendisse
              feugiat, lacus vitae laoreet viverra, diam nibh dictum quam,
              ultricies euismod ligula eros in sem. Cras tincidunt suscipit
              dolor id placerat.{" "}
            </p>
          </div>
        </>
      ) : (
        <div> No Information present</div>
      )}
    </Container>
  );
};

export default index;
