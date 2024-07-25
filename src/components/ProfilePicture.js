import Picture from "../assets/images/profile6.jpg";

const ProfilePicture = () => {
  return (
    <div id="profile-picture">
      <div className="rounded-2xl w-full h-fit overflow-hidden">
        <img src={Picture} alt="profile" className="w-56   lg:w-max lg:h-max object-cover"></img>
      </div>
    </div>
  );
};

export default ProfilePicture;
