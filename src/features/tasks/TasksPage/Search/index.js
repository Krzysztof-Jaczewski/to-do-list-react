import { Input } from "../../../../common/Input";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../queryParameters";
import { searchQueryParameter } from "../../searchQueryParameter";
import { Wrapper } from "./styled";

export const Search = () => {
  const query = useQueryParameter(searchQueryParameter);
  const ReplaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    ReplaceQueryParameter({
      key: searchQueryParameter,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
