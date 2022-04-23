function Profile({ onChange, onKeyPress, tags, tag }) {
    // Other stuff //
  
    return (
      <div>
        // Other stuff
        <Tag onChange={onChange} onKeyPress={onKeyPress} tags={tags} tag={tag} />
      </div>
    );
  }