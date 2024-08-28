import Picture from "../assets/images/profile2.jpg";

const ProfilePicture = () => {
  return (
    <div id="profile-picture">
      <div className="rounded-full w-full h-fit overflow-hidden flex  justify-center">
        <img src={Picture} alt="profile" className="w-56 sm:w-72  lg:size-[60%] rounded-full object-cover"></img>
      </div>
    </div>
  );
};

export default ProfilePicture;
