const Post = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [ingredients, setIngredients] = useState(['']);
    const [recipeName, setRecipeName] = useState('');
    const [description, setDescription] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleIngredientChange = (index, event) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = event.target.value;
        setIngredients(newIngredients);
    };

    const addIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const removeIngredient = (index) => {
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted', { recipeName, description, ingredients, selectedFile });
    };

    return (
        <div className="App-header">
            <div className="container">
                <h1>Create Your Recipe</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={recipeName}
                        onChange={(e) => setRecipeName(e.target.value)}
                        placeholder="Recipe Name"
                        className="text-input"
                    />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Recipe Description"
                        className="text-area"
                    />
                    <div className="ingredient-list">
                        <p>Ingredients:</p>
                        {ingredients.map((ingredient, index) => (
                            <div className="ingredient-item" key={index}>
                                <input
                                    type="text"
                                    value={ingredient}
                                    onChange={(event) => handleIngredientChange(index, event)}
                                    placeholder={`Ingredient ${index + 1}`}
                                />
                                <button type="button" onClick={() => removeIngredient(index)} className="remove-btn">
                                    ✖
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={addIngredient} className="add-btn">
                            Add Ingredient
                        </button>
                    </div>
                    <button type="submit" className="submit-btn">Post</button>
                </form>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
};

export default Post;
