import { SvgProps } from 'src/constants/types';

const Icon = ({ fill = '#fff' }: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89472 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3C14.387 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
      fill={fill}
    />
    <path
      d="M21.7498 12.8119C21.5904 14.6643 20.9053 16.4328 19.7751 17.9091C18.6448 19.3854 17.1164 20.5083 15.3697 21.1455C13.623 21.7827 11.7306 21.9077 9.9152 21.506C8.09981 21.1042 6.43692 20.1923 5.12219 18.8776C3.80745 17.5628 2.89556 15.9 2.49379 14.0846C2.09203 12.2692 2.2171 10.3768 2.8543 8.63008C3.4915 6.88336 4.61432 5.35496 6.09066 4.22469C7.56699 3.09443 9.33542 2.40933 11.1879 2.24998C11.2864 2.24186 11.3855 2.25321 11.4796 2.2834C11.5737 2.31358 11.661 2.362 11.7364 2.4259C11.8117 2.4898 11.8738 2.56792 11.919 2.65581C11.9642 2.74369 11.9916 2.83962 11.9998 2.93811C12.0079 3.0366 11.9965 3.13573 11.9664 3.22983C11.9362 3.32394 11.8878 3.41117 11.8239 3.48656C11.76 3.56195 11.6818 3.62402 11.594 3.66922C11.5061 3.71441 11.4101 3.74186 11.3116 3.74998C9.74376 3.8847 8.24697 4.46442 6.99738 5.42095C5.74779 6.37748 4.79739 7.67101 4.25802 9.14935C3.71864 10.6277 3.61272 12.2293 3.95273 13.7658C4.29273 15.3023 5.06451 16.7097 6.17726 17.8225C7.29001 18.9352 8.69743 19.707 10.2339 20.047C11.7704 20.387 13.3721 20.2811 14.8504 19.7417C16.3287 19.2024 17.6223 18.252 18.5788 17.0024C19.5353 15.7528 20.1151 14.256 20.2498 12.6881C20.2662 12.4892 20.3609 12.3049 20.5132 12.1759C20.6655 12.0469 20.8627 11.9836 21.0616 12C21.2606 12.0164 21.4448 12.1111 21.5739 12.2634C21.7029 12.4157 21.7662 12.6129 21.7498 12.8119ZM11.2498 6.74998V12C11.2498 12.1989 11.3288 12.3897 11.4694 12.5303C11.6101 12.671 11.8009 12.75 11.9998 12.75H17.2498C17.4487 12.75 17.6395 12.671 17.7801 12.5303C17.9208 12.3897 17.9998 12.1989 17.9998 12C17.9998 11.8011 17.9208 11.6103 17.7801 11.4697C17.6395 11.329 17.4487 11.25 17.2498 11.25H12.7498V6.74998C12.7498 6.55107 12.6708 6.36031 12.5301 6.21965C12.3895 6.079 12.1987 5.99998 11.9998 5.99998C11.8009 5.99998 11.6101 6.079 11.4694 6.21965C11.3288 6.36031 11.2498 6.55107 11.2498 6.74998ZM14.9998 4.49998C15.2223 4.49998 15.4398 4.434 15.6248 4.31039C15.8098 4.18677 15.954 4.01107 16.0391 3.8055C16.1243 3.59994 16.1466 3.37374 16.1032 3.15551C16.0597 2.93728 15.9526 2.73682 15.7953 2.57949C15.6379 2.42216 15.4375 2.31501 15.2192 2.2716C15.001 2.22819 14.7748 2.25047 14.5693 2.33562C14.3637 2.42077 14.188 2.56496 14.0644 2.74997C13.9408 2.93497 13.8748 3.15248 13.8748 3.37498C13.8748 3.67335 13.9933 3.9595 14.2043 4.17048C14.4153 4.38146 14.7014 4.49998 14.9998 4.49998ZM18.3748 6.74998C18.5973 6.74998 18.8148 6.684 18.9998 6.56039C19.1848 6.43677 19.329 6.26107 19.4141 6.0555C19.4993 5.84994 19.5216 5.62374 19.4782 5.40551C19.4347 5.18728 19.3276 4.98682 19.1703 4.82949C19.0129 4.67216 18.8125 4.56501 18.5942 4.5216C18.376 4.47819 18.1498 4.50047 17.9443 4.58562C17.7387 4.67077 17.563 4.81496 17.4394 4.99997C17.3158 5.18497 17.2498 5.40248 17.2498 5.62498C17.2498 5.92335 17.3683 6.2095 17.5793 6.42048C17.7903 6.63146 18.0764 6.74998 18.3748 6.74998ZM20.6248 10.125C20.8473 10.125 21.0648 10.059 21.2498 9.93539C21.4348 9.81177 21.579 9.63607 21.6641 9.4305C21.7493 9.22494 21.7716 8.99874 21.7282 8.78051C21.6847 8.56228 21.5776 8.36182 21.4203 8.20449C21.2629 8.04716 21.0625 7.94001 20.8442 7.8966C20.626 7.85319 20.3998 7.87547 20.1943 7.96062C19.9887 8.04577 19.813 8.18996 19.6894 8.37497C19.5658 8.55997 19.4998 8.77748 19.4998 8.99998C19.4998 9.29835 19.6183 9.5845 19.8293 9.79548C20.0403 10.0065 20.3264 10.125 20.6248 10.125Z"
      fill="black"
    />
  </svg>
);

export default Icon;