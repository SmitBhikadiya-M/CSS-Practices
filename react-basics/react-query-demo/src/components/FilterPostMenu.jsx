import { Button, Stack, TextField } from "@mui/material";
import CustomSelect from "./Form/CustomSelect";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { generatPostStatuesOption, generatePost, postStatues } from "../helper/post-helper";
import { addPost } from "../query/mutatefn";
import { getPostsKey } from "../query/queryKey";
import debouce from "lodash.debounce";
import { useEffect, useMemo } from "react";

const FilterPostMenu = ({ filter, setFilter }) => {

    const queryClient = useQueryClient()

    const addPostMutation = useMutation({
        mutationFn: () => addPost(generatePost()),
        onSuccess: (res) => {
            queryClient.invalidateQueries(getPostsKey());
        }
    })

    function onStatusUpdateHandler(value) {
        setFilter(() => ({
            status: value === postStatues[0] ? null : value
        }))
    }

    function searchInputHandler(e) {
        let search = e.target.value;
        if (!e.target?.value?.length) {
            search = null;
        }
        setFilter({
            ...filter,
            search: search
        })
    }

    const debouceSearchHandler = useMemo(() => {
        return debouce(searchInputHandler, 400)
    }, [])

    useEffect(() => {
        return () => {
            debouceSearchHandler.cancel();
        };
    });

    return <>
        <Stack direction="row" spacing={2} marginTop={2} paddingBottom={2} borderBottom={1}>
            <TextField id="standard-basic" onChange={debouceSearchHandler} label="search post by title, status..." variant="standard" style={{ flex: 1 }} />
            <CustomSelect
                options={generatPostStatuesOption()}
                defaultValue={postStatues[0]}
                onSelectHandler={onStatusUpdateHandler}></CustomSelect>
            <Button
                disabled={addPostMutation.isLoading}
                onClick={() => addPostMutation.mutate()}
                variant="outlined"
            >Add New Post</Button>
        </Stack>
    </>
}

export default FilterPostMenu;