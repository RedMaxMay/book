import React from "react";
import { Link, NavLink } from "react-router-dom";
import MobileNav from "../MobileNav/MobileNav";
import OrderBtn from "../OrderBtn/OrderBtn";
import s from "./style.module.css";

export default function Header({ modalToggle }) {
  const checkActive = ({ isActive }) => (isActive ? s.active : "");
  return (
    <header className={s.header}>
      <div className={s.header_container}>
        <div className={s.header_left}>
          <Link to="/book">
            <svg
              width="119"
              height="35"
              viewBox="0 0 119 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.0199 28V7.63636H43.054C44.5985 7.63636 45.9143 7.93134 47.0014 8.52131C48.0885 9.10464 48.9171 9.91667 49.4872 10.9574C50.0639 11.9915 50.3523 13.1847 50.3523 14.5369C50.3523 15.8892 50.0606 17.0824 49.4773 18.1165C48.8939 19.1506 48.0488 19.956 46.9418 20.5327C45.8414 21.1094 44.509 21.3977 42.9446 21.3977H37.8239V17.9474H42.2486C43.0772 17.9474 43.7599 17.8049 44.2969 17.5199C44.8404 17.2282 45.2448 16.8272 45.5099 16.3168C45.7817 15.7997 45.9176 15.2064 45.9176 14.5369C45.9176 13.8608 45.7817 13.2708 45.5099 12.767C45.2448 12.2566 44.8404 11.8622 44.2969 11.5838C43.7533 11.2988 43.0639 11.1562 42.2287 11.1562H39.3253V28H35.0199ZM57.0142 28.2884C56.0398 28.2884 55.1714 28.1193 54.4091 27.7812C53.6468 27.4366 53.0436 26.9295 52.5994 26.2599C52.1619 25.5838 51.9432 24.742 51.9432 23.7344C51.9432 22.8859 52.099 22.1733 52.4105 21.5966C52.7221 21.0199 53.1463 20.5559 53.6832 20.2045C54.2202 19.8532 54.83 19.5881 55.5128 19.4091C56.2022 19.2301 56.9247 19.1042 57.6804 19.0312C58.5687 18.9384 59.2846 18.8523 59.8281 18.7727C60.3717 18.6866 60.7661 18.5606 61.0114 18.3949C61.2566 18.2292 61.3793 17.9839 61.3793 17.6591V17.5994C61.3793 16.9697 61.1804 16.4825 60.7827 16.1378C60.3916 15.7931 59.8348 15.6207 59.1122 15.6207C58.3499 15.6207 57.7434 15.7898 57.2926 16.1278C56.8419 16.4593 56.5436 16.8769 56.3977 17.3807L52.4801 17.0625C52.679 16.1345 53.0701 15.3324 53.6534 14.6562C54.2367 13.9735 54.9891 13.4498 55.9105 13.0852C56.8385 12.714 57.9124 12.5284 59.1321 12.5284C59.9806 12.5284 60.7926 12.6278 61.5682 12.8267C62.3504 13.0256 63.0431 13.3338 63.6463 13.7514C64.2562 14.169 64.7367 14.706 65.0881 15.3622C65.4394 16.0118 65.6151 16.7907 65.6151 17.6989V28H61.598V25.8821H61.4787C61.2334 26.3594 60.9053 26.7803 60.4943 27.1449C60.0833 27.5028 59.5895 27.7846 59.0128 27.9901C58.4361 28.1889 57.7699 28.2884 57.0142 28.2884ZM58.2273 25.3651C58.8504 25.3651 59.4006 25.2424 59.8778 24.9972C60.3551 24.7453 60.7296 24.4072 61.0014 23.983C61.2732 23.5587 61.4091 23.0781 61.4091 22.5412V20.9205C61.2765 21.0066 61.0942 21.0862 60.8622 21.1591C60.6368 21.2254 60.3816 21.2884 60.0966 21.348C59.8116 21.401 59.5265 21.4508 59.2415 21.4972C58.9564 21.5369 58.6979 21.5734 58.4659 21.6065C57.9688 21.6795 57.5346 21.7955 57.1634 21.9545C56.7921 22.1136 56.5038 22.3291 56.2983 22.6009C56.0928 22.866 55.9901 23.1974 55.9901 23.5952C55.9901 24.1719 56.1989 24.6127 56.6165 24.9176C57.0407 25.2159 57.5777 25.3651 58.2273 25.3651ZM75.782 34.0455C74.4098 34.0455 73.2332 33.8565 72.2521 33.4787C71.2777 33.1075 70.5021 32.6004 69.9254 31.9574C69.3487 31.3144 68.9742 30.5919 68.8018 29.7898L72.7195 29.2628C72.8388 29.5677 73.0277 29.8527 73.2862 30.1179C73.5447 30.383 73.8861 30.5952 74.3104 30.7543C74.7412 30.92 75.2649 31.0028 75.8814 31.0028C76.8028 31.0028 77.5618 30.7775 78.1584 30.3267C78.7616 29.8826 79.0632 29.1368 79.0632 28.0895V25.2955H78.8842C78.6986 25.7197 78.4202 26.1207 78.049 26.4986C77.6778 26.8764 77.2005 27.1847 76.6172 27.4233C76.0339 27.6619 75.3378 27.7812 74.5291 27.7812C73.3823 27.7812 72.3383 27.5161 71.397 26.9858C70.4624 26.4489 69.7166 25.6302 69.1598 24.5298C68.6096 23.4228 68.3345 22.0241 68.3345 20.3338C68.3345 18.6037 68.6162 17.1586 69.1797 15.9986C69.7431 14.8385 70.4922 13.9702 71.4268 13.3935C72.3681 12.8168 73.3989 12.5284 74.5192 12.5284C75.3743 12.5284 76.0902 12.6742 76.6669 12.9659C77.2436 13.2509 77.7076 13.6089 78.0589 14.0398C78.4169 14.464 78.692 14.8816 78.8842 15.2926H79.0433V12.7273H83.2493V28.1491C83.2493 29.4484 82.9311 30.5355 82.2947 31.4105C81.6584 32.2855 80.7768 32.9418 79.6499 33.3793C78.5296 33.8234 77.2403 34.0455 75.782 34.0455ZM75.8714 24.5994C76.5542 24.5994 77.1309 24.4304 77.6016 24.0923C78.0788 23.7476 78.4434 23.2571 78.6953 22.6207C78.9538 21.9777 79.0831 21.2088 79.0831 20.3139C79.0831 19.419 78.9571 18.6435 78.7053 17.9872C78.4534 17.3243 78.0888 16.8106 77.6115 16.446C77.1342 16.0814 76.5542 15.8991 75.8714 15.8991C75.1754 15.8991 74.5888 16.0881 74.1115 16.4659C73.6342 16.8371 73.273 17.3542 73.0277 18.017C72.7824 18.6799 72.6598 19.4455 72.6598 20.3139C72.6598 21.1955 72.7824 21.9579 73.0277 22.6009C73.2796 23.2372 73.6409 23.7311 74.1115 24.0824C74.5888 24.4271 75.1754 24.5994 75.8714 24.5994ZM93.5803 28.2983C92.0092 28.2983 90.657 27.9801 89.5234 27.3438C88.3965 26.7008 87.5282 25.7926 86.9183 24.6193C86.3085 23.4394 86.0036 22.044 86.0036 20.4332C86.0036 18.8622 86.3085 17.4834 86.9183 16.2969C87.5282 15.1103 88.3866 14.1856 89.4936 13.5227C90.6072 12.8598 91.9131 12.5284 93.4112 12.5284C94.4188 12.5284 95.3568 12.6908 96.2251 13.0156C97.1001 13.3338 97.8625 13.8144 98.5121 14.4574C99.1683 15.1004 99.6787 15.9091 100.043 16.8835C100.408 17.8513 100.59 18.9848 100.59 20.2841V21.4474H87.6939V18.8224H96.603C96.603 18.2126 96.4704 17.6723 96.2053 17.2017C95.9401 16.7311 95.5722 16.3632 95.1016 16.098C94.6375 15.8262 94.0973 15.6903 93.4808 15.6903C92.8378 15.6903 92.2678 15.8395 91.7706 16.1378C91.2801 16.4295 90.8956 16.8239 90.6172 17.321C90.3388 17.8116 90.1963 18.3584 90.1896 18.9616V21.4574C90.1896 22.2131 90.3288 22.866 90.6072 23.4162C90.8923 23.9664 91.2933 24.3906 91.8104 24.6889C92.3274 24.9872 92.9406 25.1364 93.6499 25.1364C94.1205 25.1364 94.5514 25.0701 94.9425 24.9375C95.3336 24.8049 95.6683 24.6061 95.9467 24.3409C96.2251 24.0758 96.4373 23.7509 96.5831 23.3665L100.501 23.625C100.302 24.5663 99.8942 25.3883 99.2777 26.0909C98.6679 26.7869 97.879 27.3305 96.9112 27.7216C95.95 28.1061 94.8397 28.2983 93.5803 28.2983ZM116.062 17.0824L112.184 17.321C112.118 16.9896 111.975 16.6913 111.756 16.4261C111.538 16.1544 111.249 15.9389 110.891 15.7798C110.54 15.6141 110.119 15.5312 109.629 15.5312C108.972 15.5312 108.419 15.6705 107.968 15.9489C107.517 16.2206 107.292 16.5852 107.292 17.0426C107.292 17.4072 107.438 17.7154 107.729 17.9673C108.021 18.2192 108.522 18.4214 109.231 18.5739L111.995 19.1307C113.48 19.4356 114.587 19.9261 115.316 20.6023C116.045 21.2784 116.41 22.1667 116.41 23.267C116.41 24.268 116.115 25.1463 115.525 25.902C114.942 26.6577 114.139 27.2476 113.119 27.6719C112.104 28.0895 110.934 28.2983 109.609 28.2983C107.587 28.2983 105.976 27.8774 104.776 27.0355C103.583 26.187 102.884 25.0336 102.678 23.5753L106.844 23.3565C106.97 23.973 107.275 24.4437 107.759 24.7685C108.243 25.0866 108.863 25.2457 109.619 25.2457C110.361 25.2457 110.958 25.1032 111.408 24.8182C111.866 24.5265 112.098 24.152 112.104 23.6946C112.098 23.3101 111.935 22.9953 111.617 22.75C111.299 22.4981 110.808 22.3059 110.146 22.1733L107.501 21.6463C106.009 21.348 104.899 20.831 104.17 20.0952C103.447 19.3594 103.086 18.4214 103.086 17.2812C103.086 16.3002 103.351 15.455 103.881 14.7457C104.418 14.0365 105.171 13.4896 106.138 13.1051C107.113 12.7206 108.253 12.5284 109.559 12.5284C111.488 12.5284 113.006 12.9361 114.113 13.7514C115.227 14.5668 115.876 15.6771 116.062 17.0824Z"
                fill="#F5F8FC"
              />
              <path
                d="M3.56348 25.4H24.5V3H3.5057C1.57228 3.00642 0.00635613 4.58725 0 6.53908V27.1646H0.00057783C0.00057783 27.1733 0 27.1821 0 27.1908C0 29.2558 1.60521 31 3.5057 31H24.5V29.1333H3.5057C2.63895 29.1333 1.84906 28.2076 1.84906 27.1908C1.84906 26.2202 2.63433 25.4 3.56348 25.4ZM5.54717 4.88592H11.0943V14.9671L8.29764 12.4885L5.54717 14.9525V4.88592ZM1.84906 6.55367C1.84617 5.62617 2.58695 4.87192 3.5057 4.86667H3.69811H5.54717H3.69811V17.4667H5.52637L8.30458 14.9782L11.1117 17.4667H12.9434V4.86667H22.6509V23.5333H5.55179H3.70274H3.56348C2.96196 23.5333 2.37141 23.692 1.84963 23.993V6.55367H1.84906Z"
                fill="#FFCA42"
              />
            </svg>
          </Link>
          <div className={s.header_social}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/"
            >
              <svg
                width="9"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.75391 8.625L8.13672 6.10938H5.70312V4.46875C5.70312 3.75781 6.03125 3.10156 7.125 3.10156H8.24609V0.941406C8.24609 0.941406 7.23438 0.75 6.27734 0.75C4.28125 0.75 2.96875 1.98047 2.96875 4.16797V6.10938H0.726562V8.625H2.96875V14.75H5.70312V8.625H7.75391Z"
                  fill="#141414"
                />
              </svg>
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5508 2.90625C13.0977 2.49609 13.5898 2.00391 13.9727 1.42969C13.4805 1.64844 12.9062 1.8125 12.332 1.86719C12.9336 1.51172 13.3711 0.964844 13.5898 0.28125C13.043 0.609375 12.4141 0.855469 11.7852 0.992188C11.2383 0.417969 10.5 0.0898438 9.67969 0.0898438C8.09375 0.0898438 6.80859 1.375 6.80859 2.96094C6.80859 3.17969 6.83594 3.39844 6.89062 3.61719C4.51172 3.48047 2.37891 2.33203 0.957031 0.609375C0.710938 1.01953 0.574219 1.51172 0.574219 2.05859C0.574219 3.04297 1.06641 3.91797 1.85938 4.4375C1.39453 4.41016 0.929688 4.30078 0.546875 4.08203V4.10938C0.546875 5.50391 1.53125 6.65234 2.84375 6.92578C2.625 6.98047 2.35156 7.03516 2.10547 7.03516C1.91406 7.03516 1.75 7.00781 1.55859 6.98047C1.91406 8.12891 2.98047 8.94922 4.23828 8.97656C3.25391 9.74219 2.02344 10.207 0.683594 10.207C0.4375 10.207 0.21875 10.1797 0 10.1523C1.25781 10.9727 2.76172 11.4375 4.40234 11.4375C9.67969 11.4375 12.5508 7.08984 12.5508 3.28906C12.5508 3.15234 12.5508 3.04297 12.5508 2.90625Z"
                  fill="#141414"
                />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.10938 13V4.82422H0.566406V13H3.10938ZM1.82422 3.73047C2.64453 3.73047 3.30078 3.04688 3.30078 2.22656C3.30078 1.43359 2.64453 0.777344 1.82422 0.777344C1.03125 0.777344 0.375 1.43359 0.375 2.22656C0.375 3.04688 1.03125 3.73047 1.82422 3.73047ZM12.5977 13H12.625V8.51562C12.625 6.32812 12.1328 4.63281 9.5625 4.63281C8.33203 4.63281 7.51172 5.31641 7.15625 5.94531H7.12891V4.82422H4.69531V13H7.23828V8.95312C7.23828 7.88672 7.42969 6.875 8.74219 6.875C10.0547 6.875 10.082 8.07812 10.082 9.03516V13H12.5977Z"
                  fill="#141414"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className={s.header_right}>
          <nav className={s.nav}>
            <NavLink className={checkActive} to="/book">
              Home
            </NavLink>
            <NavLink className={checkActive} to="/about">
              Author
            </NavLink>
            <NavLink className={checkActive} to="/companies">
              Companies
            </NavLink>
            <NavLink className={checkActive} to="/articles">
              Articles
            </NavLink>
          </nav>
          <OrderBtn modalToggle={modalToggle} />
          <div className={s.mob_menu_wrap}>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
