import GitHubIcon from '@material-ui/icons/GitHub';

export const Logo = () => (
    <a
        href="https://github.com/raygerrard"
        className="hover:opacity-25 transition ease-in-out duration-300 flex justify-center sm:justify-start items-center uppercase py-6 font-bold"
        target="_blank"
        rel="noreferrer"
    >
        <GitHubIcon />
        <span className="ml-2 mr-2">/</span>
        <span>raygerrard</span>
    </a>
);