import Image from "next/image";
import styles from './index.module.scss'
import { CustomButton, CustomTypography } from "../";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      {/* <Image
        src="https://logoipsum.com/img/logoipsum-64.svg"
        width={100}
        height={100}
        alt="logo"
      /> */}
      <CustomTypography
        color="red"
        variant="h2"
        fontFamily="var(--font-netflix-sans-bold)"
        sx={{height: '18px', textTransform: 'uppercase'}}
      >
        Cinevia
      </CustomTypography>
      <CustomButton>Sign In</CustomButton>
    </div>
  );
};

export default Navbar;
