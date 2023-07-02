import {
    EditOutlined,
    DeleteOutlined,
    AttacheFileOutline,
    GifBoxOutlined,
    ImageOutlined,
    MicOutlined,
    MoreHorizOutlined,
} from "@mui/icons-material"
import { Box, Divider, Typography, InputBase, useTheme, Button, IconButton, useMediaQuery,} from "@mui/material";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";

const MyPostWidget = ({picturePath}) => {
    const dispatch = useDispatch(); // will switch into when photo is selected (dropzone)
    const [isImage, setIsImage] = useState(false);
    const [image, setImage] = useState (null); // if image is actually uploaded dropped in
    const [post, setPost] = useState("");
    const {palette} = useTheme();
    const { _id} = useSelector((state)=> state.use); //send to server
    const token = useSelector((state)=> state.token); // allows user to post - verf via API
    const isNonMobileScreens= useMediaQuery("(min-width: 1000px)");
    const mediumMain = palette.neutral.mediumMain;
    const medium = palette.neutral.medium;

    //create function that handles post  - API call
    const handlePost = async () => {
        const formData = new FormData();
        formData.append("userId", _id);
        formData.append("description", post);
        //if there is an image
        if (image) {
            formData.append("picture", image);
        }
    }
}